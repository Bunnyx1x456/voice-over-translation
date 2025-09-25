import { VideoHandler } from "..";
import { SubtitleInterceptor } from "./subtitleInterceptor";
import { BergamotTranslator } from "./bergamotTranslator";
import { SpeechSynthesizer } from "./speechSynthesizer";
import { RequestLang, ResponseLang } from "@vot.js/shared/types/data";

export class VOTTranslationHandler {
  private videoHandler: VideoHandler;
  private subtitleInterceptor: SubtitleInterceptor;
  private translator: BergamotTranslator;
  private synthesizer: SpeechSynthesizer;
  private playbackQueue: { translatedText: string; startTime: number; lang: string }[] = [];

  constructor(videoHandler: VideoHandler) {
    this.videoHandler = videoHandler;
    this.translator = new BergamotTranslator();
    this.synthesizer = new SpeechSynthesizer();
    this.subtitleInterceptor = new SubtitleInterceptor();

    this.subtitleInterceptor.addEventListener("subtitle", (event) => {
      const { text, startTime, endTime } = (event as CustomEvent).detail;
      this.handleNewSubtitle(text, startTime, endTime);
    });

    this.videoHandler.video.addEventListener("timeupdate", () => {
      this.processPlaybackQueue();
    });
  }

  private async handleNewSubtitle(text: string, startTime: number, endTime: number) {
    const fromLang = this.videoHandler.videoData.detectedLanguage as RequestLang;
    const toLang = this.videoHandler.videoData.responseLanguage as ResponseLang;
    const translatedText = await this.translator.translate(text, fromLang, toLang);
    this.playbackQueue.push({ translatedText, startTime, lang: toLang });
  }

  private processPlaybackQueue() {
    const currentTime = this.videoHandler.video.currentTime;
    const nextCue = this.playbackQueue[0];

    if (nextCue && currentTime >= nextCue.startTime) {
      this.synthesizer.speak(nextCue.translatedText, nextCue.lang);
      this.playbackQueue.shift();
    }
  }

  public async translate(from: RequestLang, to: ResponseLang) {
    // This method will now primarily be responsible for initializing the process
    // and ensuring the necessary language models are loaded.
    console.log(`Translation from ${from} to ${to} initiated.`);
    await this.translator.init(from, to);
    this.subtitleInterceptor.observe();
  }

  public stop() {
    this.subtitleInterceptor.disconnect();
    this.synthesizer.cancel();
    this.playbackQueue = [];
  }
}