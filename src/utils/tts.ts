// Імпортуємо edge-tts-universal
import EdgeTTS from "edge-tts-universal";
import { votStorage } from "./storage";

export interface TTSOptions {
  text: string;
  voice?: string;
  rate?: number;
  volume?: number;
  pitch?: number;
}

export interface TTSResult {
  audioBuffer: ArrayBuffer;
  metadata?: {
    wordBoundaries?: Array<{
      text: string;
      startTime: number;
      endTime: number;
    }>;
  };
}

/**
 * Список доступних голосів для Edge TTS
 */
export const availableVoices = [
  { name: "en-US-JennyNeural", lang: "en-US", gender: "Female" },
  { name: "en-US-GuyNeural", lang: "en-US", gender: "Male" },
  { name: "uk-UA-OstapNeural", lang: "uk-UA", gender: "Male" },
  { name: "uk-UA-PolinaNeural", lang: "uk-UA", gender: "Female" },
  { name: "ru-RU-SvetlanaNeural", lang: "ru-RU", gender: "Female" },
  { name: "ru-RU-DmitryNeural", lang: "ru-RU", gender: "Male" },
  // Додамо більше голосів за потреби
];

/**
 * Отримати список доступних голосів
 */
export async function getAvailableVoices(): Promise<any[]> {
  try {
    // Використовуємо EdgeTTS для отримання голосів
    const voices: any[] = await EdgeTTS.getVoices();
    return voices.map((voice: any) => ({
      name: voice.ShortName,
      lang: voice.Locale,
      gender: voice.Gender,
    }));
  } catch (error) {
    console.warn(
      "[VOT] Failed to get voices from Edge TTS, using default list",
      error,
    );
    return availableVoices;
  }
}

/**
 * Синтез мовлення з підтримкою SSML
 */
export async function synthesizeSpeech(
  options: TTSOptions,
): Promise<TTSResult> {
  try {
    const {
      text,
      voice = "en-US-JennyNeural",
      rate = 1.0,
      volume = 1.0,
      pitch = 1.0,
    } = options;

    // Використовуємо EdgeTTS для синтезу
    const tts = new EdgeTTS({
      voice,
      rate: Math.round((rate - 1) * 100), // Edge TTS використовує відсотки
      volume: Math.round((volume - 1) * 100),
      pitch: Math.round((pitch - 1) * 100),
    });

    // Отримуємо аудіо як ArrayBuffer
    const audioBuffer = await tts.toArrayBuffer(text);

    return {
      audioBuffer,
      metadata: {
        // Якщо EdgeTTS підтримує отримання метаданих, додамо їх тут
        wordBoundaries: [], // Поки що порожньо, можна додати пізніше
      },
    };
  } catch (error) {
    console.error("[VOT] Error synthesizing speech", error);
    throw error;
  }
}

/**
 * Синтез мовлення з потоковою передачею
 */
export async function synthesizeSpeechStream(
  options: TTSOptions,
  onAudioChunk?: (chunk: ArrayBuffer) => void,
): Promise<void> {
  try {
    const {
      text,
      voice = "en-US-JennyNeural",
      rate = 1.0,
      volume = 1.0,
      pitch = 1.0,
    } = options;

    const tts = new EdgeTTS({
      voice,
      rate: Math.round((rate - 1) * 100),
      volume: Math.round((volume - 1) * 100),
      pitch: Math.round((pitch - 1) * 100),
    });

    // Використовуємо потокову передачу
    const stream = await tts.toStream(text);

    // Обробляємо кожен чанк аудіо
    for await (const chunk of stream) {
      if (onAudioChunk) {
        onAudioChunk(chunk);
      }
    }
  } catch (error) {
    console.error("[VOT] Error synthesizing speech stream", error);
    throw error;
  }
}

/**
 * Отримати голос за мовою
 */
export async function getVoiceByLanguage(lang: string): Promise<string> {
  const voices = await getAvailableVoices();
  const voice = voices.find((v: any) => v.lang.startsWith(lang));
  return voice ? voice.name : "en-US-JennyNeural"; // fallback
}

/**
 * Отримати налаштування TTS зі сховища
 */
export async function getTTSSettings() {
  const settings = await votStorage.get("ttsSettings" as any, {
    voice: "en-US-JennyNeural",
    rate: 1.0,
    volume: 1.0,
    pitch: 1.0,
    service: "edge-tts", // можливість вибору сервісу
  });

  return settings;
}

export default {
  synthesizeSpeech,
  synthesizeSpeechStream,
  getAvailableVoices,
  getVoiceByLanguage,
  getTTSSettings,
  availableVoices,
};
