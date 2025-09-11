// Експорт нових компонентів та функціоналу

export { VOTTTSHandler } from "./core/ttsHandler.js";
export { VOTVideoManager } from "./core/videoManager.js";
export type { TTSSettings } from "./types/storage.js";
// Експорт типів
export type {
  DetectService,
  TranslateService,
  TTSService,
} from "./types/translateApis.js";
export { VOTApiKeyInput } from "./ui/components/apiKeyInput.js";
export { VOTServiceSelect } from "./ui/components/serviceSelect.js";
// Експорт утиліт
export { detect, translate } from "./utils/translateApis.js";
export {
  getTTSSettings,
  synthesizeSpeech,
  synthesizeSpeechStream,
} from "./utils/tts.js";
