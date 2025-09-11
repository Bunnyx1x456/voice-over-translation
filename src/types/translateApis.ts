import { detectServices, translateServices } from "../utils/translateApis";

export type TranslateService = (typeof translateServices)[number];
export type DetectService = (typeof detectServices)[number];

// Додамо типи для TTS сервісів
export type TTSService = "edge-tts" | "browser-speech" | "custom";

export interface TranslationConfig {
  translationService: TranslateService;
  detectService: DetectService;
  ttsService: TTSService;
  geminiApiKey?: string;
}
