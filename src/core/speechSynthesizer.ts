export class SpeechSynthesizer {
  private synth = window.speechSynthesis;
  private voices: SpeechSynthesisVoice[] = [];

  constructor() {
    this.populateVoiceList();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = this.populateVoiceList.bind(this);
    }
  }

  private populateVoiceList() {
    this.voices = this.synth.getVoices();
  }

  public speak(text: string, lang: string) {
    if (this.synth.speaking) {
      this.synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;

    const voice = this.voices.find(
      (v) => v.lang === lang || v.lang.startsWith(`${lang}-`)
    );
    if (voice) {
      utterance.voice = voice;
    } else {
      console.warn(`No voice found for language: ${lang}`);
    }

    this.synth.speak(utterance);
  }

  public cancel() {
    this.synth.cancel();
  }
}