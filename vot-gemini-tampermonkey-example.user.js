// ==UserScript==
// @name         VOT Gemini Translation Example
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Example of using Gemini translation in VOT
// @author       You
// @match        *://*/*
// @grant        GM.setValue
// @grant        GM.getValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @connect      generativelanguage.googleapis.com
// @require      https://cdn.jsdelivr.net/npm/@google/generative-ai@latest/dist/browser.min.js
// ==/UserScript==

(function () {
  "use strict";

  // Простий приклад використання Google Gemini для перекладу
  class SimpleGeminiTranslator {
    constructor() {
      this.apiKey = "";
      this.initialized = false;
    }

    // Ініціалізація з API ключем
    async init(apiKey) {
      if (!apiKey) {
        console.warn("[VOT Gemini] API key is required");
        return false;
      }

      this.apiKey = apiKey;
      this.initialized = true;

      // Зберігаємо ключ в сховищі
      try {
        await GM.setValue("gemini_api_key", apiKey);
      } catch (error) {
        console.error("[VOT Gemini] Error saving API key:", error);
      }

      return true;
    }

    // Отримання збереженого API ключа
    async getSavedApiKey() {
      try {
        return await GM.getValue("gemini_api_key", "");
      } catch (error) {
        console.error("[VOT Gemini] Error getting saved API key:", error);
        return "";
      }
    }

    // Простий переклад тексту
    async translate(text, targetLang = "uk") {
      if (!this.initialized) {
        const savedKey = await this.getSavedApiKey();
        if (savedKey) {
          await this.init(savedKey);
        } else {
          console.warn(
            "[VOT Gemini] Translator not initialized and no saved API key found",
          );
          return text;
        }
      }

      if (!this.apiKey) {
        console.warn("[VOT Gemini] No API key available");
        return text;
      }

      try {
        // Використовуємо Google Generative AI
        const genAI = new googleGenerativeAI.GoogleGenerativeAI(this.apiKey);
        const model = genAI.getGenerativeModel({
          model: "gemini-2.5-flash-lite",
        });

        const prompt = `Translate the following text to ${targetLang}. Return only the translated text without any additional comments or explanations:\n\n${text}`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const translatedText = response.text();

        return translatedText.trim();
      } catch (error) {
        console.error("[VOT Gemini] Translation error:", error);
        return text;
      }
    }

    // Створення простого GUI для введення API ключа
    createApiKeyInput() {
      // Створюємо контейнер
      const container = document.createElement("div");
      container.style.cssText = `
                position: fixed;
                top: 10px;
                right: 10px;
                background: white;
                padding: 15px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 10000;
                font-family: Arial, sans-serif;
                min-width: 300px;
            `;

      container.innerHTML = `
                <h3 style="margin: 0 0 10px 0; color: #333;">VOT Gemini Settings</h3>
                <div style="margin-bottom: 10px;">
                    <label style="display: block; margin-bottom: 4px; font-size: 12px; font-weight: bold;">
                        Google Gemini API Key:
                    </label>
                    <input type="password" id="geminiApiKey" placeholder="Enter your API key" 
                           style="width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px; font-size: 12px;">
                    <p style="font-size: 10px; color: #666; margin: 4px 0 0 0;">
                        Get key from <a href="https://aistudio.google.com/app/apikey" target="_blank" style="color: #4285f4;">Google AI Studio</a>
                    </p>
                </div>
                <div style="display: flex; gap: 5px;">
                    <button id="saveGeminiKey" style="flex: 1; padding: 6px; background: #4285f4; color: white; border: none; border-radius: 4px; font-size: 12px; cursor: pointer;">
                        Save
                    </button>
                    <button id="closeGeminiSettings" style="flex: 1; padding: 6px; background: #f1f1f1; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; cursor: pointer;">
                        Close
                    </button>
                </div>
            `;

      // Додаємо обробники подій
      container.querySelector("#saveGeminiKey").onclick = async () => {
        const apiKey = container.querySelector("#geminiApiKey").value.trim();
        if (apiKey) {
          await this.init(apiKey);
          alert("API key saved successfully!");
          container.querySelector("#geminiApiKey").value = "*".repeat(20);
        } else {
          alert("Please enter a valid API key");
        }
      };

      container.querySelector("#closeGeminiSettings").onclick = () => {
        document.body.removeChild(container);
      };

      // Завантажуємо збережений ключ
      this.getSavedApiKey().then((savedKey) => {
        if (savedKey) {
          container.querySelector("#geminiApiKey").value = "*".repeat(20);
        }
      });

      document.body.appendChild(container);
    }
  }

  // Створюємо екземпляр перекладача
  const translator = new SimpleGeminiTranslator();

  // Додаємо кнопку для відкриття налаштувань
  function addSettingsButton() {
    const button = document.createElement("button");
    button.textContent = "VOT Gemini";
    button.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 10px 15px;
            background: #4285f4;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-family: Arial, sans-serif;
            font-size: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            z-index: 9999;
        `;

    button.onclick = () => {
      translator.createApiKeyInput();
    };

    document.body.appendChild(button);
  }

  // Функція для тестування перекладу
  async function testTranslation() {
    console.log("=== Testing VOT Gemini Translation ===");

    const testText =
      "Hello, this is a test of the Google Gemini translation feature!";
    console.log("Original text:", testText);

    const translated = await translator.translate(testText, "uk");
    console.log("Translated text:", translated);

    // Показуємо сповіщення
    alert(
      `Translation test:\n\nOriginal: ${testText}\n\nTranslated: ${translated}`,
    );
  }

  // Ініціалізація
  async function init() {
    console.log("[VOT Gemini] Initializing...");

    // Спробуємо отримати збережений API ключ
    const savedKey = await translator.getSavedApiKey();
    if (savedKey) {
      await translator.init(savedKey);
      console.log("[VOT Gemini] Initialized with saved API key");
    }

    // Додаємо кнопку налаштувань
    addSettingsButton();

    // Додаємо глобальні функції для використання в консолі
    window.VOT_Gemini_Translate = (text, lang) =>
      translator.translate(text, lang);
    window.VOT_Gemini_Test = testTranslation;

    console.log(
      "[VOT Gemini] Ready! Use VOT_Gemini_Translate(text, lang) in console",
    );
  }

  // Запускаємо ініціалізацію коли DOM готовий
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
