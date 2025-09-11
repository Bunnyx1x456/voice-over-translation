import { VideoData } from "..";
import debug from "../utils/debug";
import { VOTTranslationHandler } from "./translationHandler";
import { VOTTTSHandler } from "./ttsHandler";

export class VOTVideoManager {
  private translationHandler: VOTTranslationHandler;
  private ttsHandler: VOTTTSHandler;
  private isSpeaking = false;

  constructor(translationHandler: VOTTranslationHandler) {
    this.translationHandler = translationHandler;
    this.ttsHandler = new VOTTTSHandler();
  }

  /**
   * Відтворює перекладений текст через TTS
   */
  async speakTranslation(text: string, lang: string = "en"): Promise<void> {
    try {
      if (this.isSpeaking) {
        await this.ttsHandler.stop();
      }

      this.isSpeaking = true;
      await this.ttsHandler.speakText(text, lang);
      this.isSpeaking = false;
    } catch (error) {
      console.error("[VOT] Error speaking translation", error);
      this.isSpeaking = false;
      throw error;
    }
  }

  /**
   * Відтворює перекладений текст через TTS з потоковою передачею
   */
  async speakTranslationStream(
    text: string,
    lang: string = "en",
  ): Promise<void> {
    try {
      if (this.isSpeaking) {
        await this.ttsHandler.stop();
      }

      this.isSpeaking = true;
      await this.ttsHandler.speakTextStream(text, lang);
      this.isSpeaking = false;
    } catch (error) {
      console.error("[VOT] Error speaking translation stream", error);
      this.isSpeaking = false;
      throw error;
    }
  }

  /**
   * Зупиняє відтворення TTS
   */
  async stopSpeaking(): Promise<void> {
    await this.ttsHandler.stop();
    this.isSpeaking = false;
  }

  /**
   * Відновлює відтворення TTS
   */
  async resumeSpeaking(): Promise<void> {
    await this.ttsHandler.resume();
  }

  /**
   * Очищує ресурси
   */
  async destroy(): Promise<void> {
    await this.ttsHandler.destroy();
    this.isSpeaking = false;
  }

  /**
   * Отримує доступ до TTS handler для розширеного використання
   */
  getTTSHandler(): VOTTTSHandler {
    return this.ttsHandler;
  }
}
