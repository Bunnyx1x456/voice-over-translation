import debug from "../utils/debug";
import { votStorage } from "../utils/storage";
import {
  getVoiceByLanguage,
  synthesizeSpeech,
  synthesizeSpeechStream,
} from "../utils/tts";

export class VOTTTSHandler {
  private audioContext: AudioContext | null = null;
  private audioQueue: ArrayBuffer[] = [];
  private isPlaying = false;

  constructor() {
    // Ініціалізуємо AudioContext при першому використанні
    this.initAudioContext();
  }

  private async initAudioContext() {
    try {
      if (typeof window !== "undefined" && window.AudioContext) {
        this.audioContext = new (
          window.AudioContext || (window as any).webkitAudioContext
        )();
      }
    } catch (error) {
      console.warn("[VOT] Failed to initialize AudioContext", error);
    }
  }

  /**
   * Синтезує мовлення з тексту та відтворює його
   */
  async speakText(text: string, lang: string = "en"): Promise<void> {
    try {
      // Отримуємо налаштування TTS
      const ttsSettings = await votStorage.get("ttsSettings" as any, {
        voice: "en-US-JennyNeural",
        rate: 1.0,
        volume: 1.0,
        pitch: 1.0,
        service: "edge-tts",
      });

      // Отримуємо голос для мови
      const voice = await getVoiceByLanguage(lang);

      // Синтезуємо мовлення
      const result = await synthesizeSpeech({
        text,
        voice: voice,
        rate: ttsSettings.rate,
        volume: ttsSettings.volume,
        pitch: ttsSettings.pitch,
      });

      // Відтворюємо аудіо
      await this.playAudio(result.audioBuffer);
    } catch (error) {
      console.error("[VOT] Error speaking text", error);
      throw error;
    }
  }

  /**
   * Синтезує мовлення з потоковою передачею
   */
  async speakTextStream(
    text: string,
    lang: string = "en",
    onAudioChunk?: (chunk: ArrayBuffer) => void,
  ): Promise<void> {
    try {
      // Отримуємо налаштування TTS
      const ttsSettings = await votStorage.get("ttsSettings" as any, {
        voice: "en-US-JennyNeural",
        rate: 1.0,
        volume: 1.0,
        pitch: 1.0,
        service: "edge-tts",
      });

      // Отримуємо голос для мови
      const voice = await getVoiceByLanguage(lang);

      // Синтезуємо мовлення з потоковою передачею
      await synthesizeSpeechStream(
        {
          text,
          voice: voice,
          rate: ttsSettings.rate,
          volume: ttsSettings.volume,
          pitch: ttsSettings.pitch,
        },
        onAudioChunk,
      );
    } catch (error) {
      console.error("[VOT] Error speaking text stream", error);
      throw error;
    }
  }

  /**
   * Відтворює аудіо буфер
   */
  private async playAudio(audioBuffer: ArrayBuffer): Promise<void> {
    if (!this.audioContext) {
      await this.initAudioContext();
      if (!this.audioContext) {
        throw new Error("AudioContext not available");
      }
    }

    try {
      // Декодуємо аудіо
      const audioBufferDecoded = await this.audioContext.decodeAudioData(
        audioBuffer.slice(0),
      );

      // Створюємо джерело звуку
      const source = this.audioContext.createBufferSource();
      source.buffer = audioBufferDecoded;

      // Підключаємо до вихідного вузла
      source.connect(this.audioContext.destination);

      // Відтворюємо
      source.start(0);

      // Очікуємо завершення відтворення
      return new Promise((resolve) => {
        source.onended = () => resolve();
      });
    } catch (error) {
      console.error("[VOT] Error playing audio", error);
      throw error;
    }
  }

  /**
   * Додає аудіо до черги відтворення
   */
  async queueAudio(audioBuffer: ArrayBuffer): Promise<void> {
    this.audioQueue.push(audioBuffer);
    if (!this.isPlaying) {
      await this.processAudioQueue();
    }
  }

  /**
   * Обробляє чергу аудіо
   */
  private async processAudioQueue(): Promise<void> {
    if (this.audioQueue.length === 0) {
      this.isPlaying = false;
      return;
    }

    this.isPlaying = true;
    const audioBuffer = this.audioQueue.shift();

    if (audioBuffer) {
      try {
        await this.playAudio(audioBuffer);
      } catch (error) {
        console.error("[VOT] Error playing queued audio", error);
      }
    }

    // Продовжуємо обробку черги
    await this.processAudioQueue();
  }

  /**
   * Зупиняє відтворення
   */
  async stop(): Promise<void> {
    if (this.audioContext) {
      await this.audioContext.suspend();
    }
    this.audioQueue = [];
    this.isPlaying = false;
  }

  /**
   * Відновлює відтворення
   */
  async resume(): Promise<void> {
    if (this.audioContext) {
      await this.audioContext.resume();
    }
  }

  /**
   * Очищує ресурси
   */
  async destroy(): Promise<void> {
    await this.stop();
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
  }
}
