import { LatencyOptimisedTranslator } from "@browsermt/bergamot-translator";

export class BergamotTranslator {
  private translator: LatencyOptimisedTranslator | null = null;

  public async init(from: string, to: string) {
    const modelRepo = "https://raw.githubusercontent.com/mozilla/firefox-translations-models/main/models";
    const modelPrefix = `${from}${to}`;

    // Construct the URLs for the model files
    const modelUrl = `${modelRepo}/prod/${modelPrefix}/model.${modelPrefix}.intgemm.alphas.bin`;
    const vocabUrl = `${modelRepo}/prod/${modelPrefix}/vocab.${modelPrefix}.spm`;
    const shortlistUrl = `${modelRepo}/prod/${modelPrefix}/lex.50.50.${modelPrefix}.s2t.bin`;

    try {
      this.translator = new LatencyOptimisedTranslator({
        model: modelUrl,
        vocabulary: vocabUrl,
        shortlist: shortlistUrl,
      });
    } catch (error) {
      console.error("Failed to initialize Bergamot translator:", error);
      throw new Error("Failed to initialize translator.");
    }
  }

  public async translate(
    text: string,
    from: string,
    to: string
  ): Promise<string> {
    if (!this.translator) {
      await this.init(from, to);
    }

    if (!this.translator) {
      throw new Error("Translator not initialized.");
    }

    return new Promise((resolve, reject) => {
      this.translator.translate({
        from,
        to,
        text,
        onComplete: (translatedText: string) => {
          resolve(translatedText);
        },
        onError: (error: any) => {
          console.error("Translation error:", error);
          reject(error);
        },
      });
    });
  }
}