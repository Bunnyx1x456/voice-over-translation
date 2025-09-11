// Додамо імпорт для Google GenAI
import { GoogleGenAI } from "@google/genai";
import { BaseProviderType, ClientType } from "@toil/translate/types";
import {
  defaultDetectService,
  defaultTranslationService,
  detectRustServerUrl,
  foswlyTranslateUrl,
} from "../config/config.js";
import { GM_fetch } from "./gm";
import { votStorage } from "./storage";

type FOSWLYErrorResponse = {
  error: string;
};

/**
 * Limit: 10k symbols for yandex, 50k for msedge
 */
const FOSWLYTranslateAPI = new (class {
  isFOSWLYError<T extends object>(
    data: T | FOSWLYErrorResponse,
  ): data is FOSWLYErrorResponse {
    return Object.hasOwn(data, "error");
  }

  async request<T extends object>(
    path: string,
    opts: Record<string, unknown> = {},
  ) {
    try {
      const res = await GM_fetch(`${foswlyTranslateUrl}${path}`, {
        timeout: 3000,
        ...opts,
      });

      const data = (await res.json()) as T | FOSWLYErrorResponse;
      if (this.isFOSWLYError<T>(data)) {
        throw data.error;
      }

      return data;
    } catch (err) {
      console.error(
        `[VOT] Failed to get data from FOSWLY Translate API, because ${
          (err as Error).message
        }`,
      );
      return undefined;
    }
  }

  async translateMultiple(text: string[], lang: string, service: string) {
    const result = await this.request<BaseProviderType.TranslationResponse>(
      "/translate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          lang,
          service,
        }),
      },
    );

    return result ? result.translations : text;
  }

  async translate(text: string, lang: string, service: string) {
    const result = await this.request<BaseProviderType.TranslationResponse>(
      `/translate?${new URLSearchParams({
        text,
        lang,
        service,
      })}`,
    );

    return result ? result.translations[0] : text;
  }

  async detect(text: string, service: string) {
    const result = await this.request<BaseProviderType.DetectResponse>(
      `/detect?${new URLSearchParams({
        text,
        service,
      })}`,
    );

    return result ? result.lang : "en";
  }
})();

const RustServerAPI = {
  async detect(text: string) {
    try {
      const response = await GM_fetch(detectRustServerUrl, {
        method: "POST",
        body: text,
        timeout: 3000,
      });

      return await response.text();
    } catch (error) {
      console.error(
        `[VOT] Error getting lang from text, because ${
          (error as Error).message
        }`,
      );
      return "en";
    }
  },
};

// Додамо Gemini API
const GeminiAPI = new (class {
  private ai: GoogleGenAI | null = null;
  private model: string;
  private apiKey: string | null = null;

  constructor() {
    this.model = "models/gemini-2.5-flash-lite";
    // Ініціалізуємо API ключ пізніше при першому використанні
  }

  async initializeApiKey(): Promise<void> {
    if (this.apiKey !== null) return; // Вже ініціалізовано

    try {
      // Імпортуємо votStorage локально для уникнення циклічних залежностей
      const storageModule = await import("./storage.js");
      const votStorage = storageModule.votStorage;

      // Отримуємо API ключ зі сховища
      this.apiKey = await votStorage.get("geminiApiKey" as any, "");

      // Якщо є ключ, ініціалізуємо Google GenAI
      if (this.apiKey && this.apiKey.trim() !== "") {
        this.ai = new GoogleGenAI({
          apiKey: this.apiKey,
        });
      } else {
        console.warn("[VOT] Gemini API key not found in storage");
      }
    } catch (error) {
      console.error("[VOT] Error initializing Gemini API key:", error);
      this.apiKey = "";
    }
  }

  async translate(text: string, targetLang: string): Promise<string> {
    try {
      // Ініціалізуємо API ключ при першому виклику
      await this.initializeApiKey();

      // Якщо немає API ключа, повертаємо оригінальний текст
      if (!this.ai) {
        console.warn("[VOT] Gemini API key not found, returning original text");
        return text;
      }

      const tools = [
        {
          googleSearch: {},
        },
      ];
      const config = {
        thinkingConfig: {
          thinkingBudget: 24576,
        },
        tools,
      };

      const contents = [
        {
          role: "user",
          parts: [
            {
              text: `Translate the following text to ${targetLang}. Return only the translated text without any additional comments or explanations:\n\n${text}`,
            },
          ],
        },
      ];

      const response = await this.ai.models.generateContentStream({
        model: this.model,
        config,
        contents,
      });

      let result = "";
      for await (const chunk of response) {
        result += chunk.text;
      }

      return result.trim();
    } catch (error) {
      console.error(
        `[VOT] Error translating with Gemini: ${(error as Error).message}`,
      );
      return text;
    }
  }

  // Метод для оновлення API ключа
  async updateApiKey(newApiKey: string): Promise<void> {
    this.apiKey = newApiKey;
    if (newApiKey && newApiKey.trim() !== "") {
      this.ai = new GoogleGenAI({
        apiKey: newApiKey,
      });
    } else {
      this.ai = null;
    }

    // Зберігаємо новий ключ в сховищі
    try {
      const storageModule = await import("./storage.js");
      const votStorage = storageModule.votStorage;
      await votStorage.set("geminiApiKey" as any, newApiKey);
    } catch (error) {
      console.error("[VOT] Error saving Gemini API key to storage:", error);
    }
  }

  // Метод для отримання поточного API ключа (без самого ключа, лише для перевірки наявності)
  hasApiKey(): boolean {
    return this.apiKey !== null && this.apiKey.trim() !== "";
  }
})();

async function translate(
  text: string | string[],
  fromLang = "",
  toLang = "ru",
) {
  const service = await votStorage.get(
    "translationService" as any,
    defaultTranslationService,
  );
  switch (service) {
    case "yandexbrowser":
    case "msedge": {
      const langPair = fromLang && toLang ? `${fromLang}-${toLang}` : toLang;
      return Array.isArray(text)
        ? await FOSWLYTranslateAPI.translateMultiple(text, langPair, service)
        : await FOSWLYTranslateAPI.translate(text, langPair, service);
    }
    case "gemini": {
      // Для масиву текстів перекладаємо кожен окремо
      if (Array.isArray(text)) {
        const translations = [];
        for (const item of text) {
          const translated = await GeminiAPI.translate(item, toLang);
          translations.push(translated);
        }
        return translations;
      }
      // Для одного тексту
      return await GeminiAPI.translate(text, toLang);
    }
    default:
      return text;
  }
}

async function detect(text: string) {
  const service = await votStorage.get(
    "detectService" as any,
    defaultDetectService,
  );
  switch (service) {
    case "yandexbrowser":
    case "msedge":
      return await FOSWLYTranslateAPI.detect(text, service);
    case "rust-server":
      return await RustServerAPI.detect(text);
    default:
      return "en";
  }
}

const foswlyServices = ["yandexbrowser", "msedge"] as const;
const detectServices = [...foswlyServices, "rust-server"] as const;
// Додамо Gemini до списку сервісів перекладу
const translateServices = [...foswlyServices, "gemini"] as const;

export { translate, detect, translateServices, detectServices };
