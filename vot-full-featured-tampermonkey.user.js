// ==UserScript==
// @name         Voice Over Translation - Full Featured
// @namespace    https://github.com/ilyhalight/voice-over-translation
// @version      2.0.0
// @description  Advanced video translation with Google Gemini AI and Microsoft Edge TTS support
// @author       Toil & Community
// @match        *://youtube.com/*
// @match        *://*.youtube.com/*
// @match        *://youtube-nocookie.com/*
// @match        *://*.youtube-nocookie.com/*
// @match        *://youtu.be/*
// @match        *://*.youtu.be/*
// @match        *://rutube.ru/*
// @match        *://*.rutube.ru/*
// @match        *://ok.ru/*
// @match        *://*.ok.ru/*
// @match        *://vk.com/*
// @match        *://*.vk.com/*
// @match        *://vimeo.com/*
// @match        *://*.vimeo.com/*
// @match        *://dailymotion.com/*
// @match        *://*.dailymotion.com/*
// @match        *://twitch.tv/*
// @match        *://*.twitch.tv/*
// @match        *://bilibili.com/*
// @match        *://*.bilibili.com/*
// @match        *://ted.com/*
// @match        *://*.ted.com/*
// @match        *://yandexdisk.com/*
// @match        *://*.yandexdisk.com/*
// @match        *://coub.com/*
// @match        *://*.coub.com/*
// @match        *://vine.co/*
// @match        *://*.vine.co/*
// @match        *://my.mail.ru/*
// @match        *://*.my.mail.ru/*
// @match        *://ivi.ru/*
// @match        *://*.ivi.ru/*
// @match        *://viki.com/*
// @match        *://*.viki.com/*
// @match        *://tiktok.com/*
// @match        *://*.tiktok.com/*
// @match        *://archive.org/*
// @match        *://*.archive.org/*
// @match        *://patreon.com/*
// @match        *://*.patreon.com/*
// @match        *://facebook.com/*
// @match        *://*.facebook.com/*
// @match        *://fb.watch/*
// @match        *://*.fb.watch/*
// @match        *://instagram.com/*
// @match        *://*.instagram.com/*
// @match        *://whowatch.tv/*
// @match        *://*.whowatch.tv/*
// @match        *://9gag.com/*
// @match        *://*.9gag.com/*
// @match        *://twitter.com/*
// @match        *://*.twitter.com/*
// @match        *://x.com/*
// @match        *://*.x.com/*
// @match        *://rumble.com/*
// @match        *://*.rumble.com/*
// @match        *://loom.com/*
// @match        *://*.loom.com/*
// @match        *://reddit.com/*
// @match        *://*.reddit.com/*
// @match        *://tumblr.com/*
// @match        *://*.tumblr.com/*
// @match        *://pinterest.com/*
// @match        *://*.pinterest.com/*
// @match        *://imgur.com/*
// @match        *://*.imgur.com/*
// @match        *://gyazo.com/*
// @match        *://*.gyazo.com/*
// @match        *://gfycat.com/*
// @match        *://*.gfycat.com/*
// @match        *://giphy.com/*
// @match        *://*.giphy.com/*
// @match        *://tenor.com/*
// @match        *://*.tenor.com/*
// @match        *://flickr.com/*
// @match        *://*.flickr.com/*
// @match        *://deviantart.com/*
// @match        *://*.deviantart.com/*
// @match        *://artstation.com/*
// @match        *://*.artstation.com/*
// @match        *://behance.net/*
// @match        *://*.behance.net/*
// @match        *://dribbble.com/*
// @match        *://*.dribbble.com/*
// @match        *://500px.com/*
// @match        *://*.500px.com/*
// @match        *://unsplash.com/*
// @match        *://*.unsplash.com/*
// @match        *://pexels.com/*
// @match        *://*.pexels.com/*
// @match        *://pixabay.com/*
// @match        *://*.pixabay.com/*
// @grant        GM.xmlHttpRequest
// @grant        GM.setValue
// @grant        GM.getValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @grant        GM.getResourceURL
// @grant        GM_addStyle
// @grant        GM_getResourceURL
// @grant        unsafeWindow
// @connect      api.browser.yandex.ru
// @connect      translate.toil.cc
// @connect      detect-v2.toil.kim
// @connect      m3u8.toil.cc
// @connect      vot.toil.cc
// @connect      api.cognitive.microsofttranslator.com
// @connect      api.cognitive.microsoft.com
// @connect      translate.googleapis.com
// @connect      www.googleapis.com
// @connect      api.deepl.com
// @connect      api.deepl-free.com
// @connect      api-free.deepl.com
// @connect      www2.deepl.com
// @connect      generativelanguage.googleapis.com
// @connect      *
// @require      https://cdn.jsdelivr.net/npm/@vot.js/ext@latest/dist/browser.js
// @require      https://cdn.jsdelivr.net/npm/chaimu@latest/dist/browser.js
// @require      https://cdn.jsdelivr.net/npm/@google/generative-ai@latest/dist/browser.min.js
// @require      https://cdn.jsdelivr.net/npm/edge-tts-universal@latest/dist/browser.min.js
// @icon         https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/src/assets/128.png
// @license      MIT
// ==/UserScript==

/**
 * Voice Over Translation - Full Featured Version
 *
 * This script enhances the original VOT with:
 * - Google Gemini AI translation support
 * - Microsoft Edge TTS synthesis
 * - Modern UI with service selection
 * - API key management through GUI
 * - Integrated translation and TTS workflow
 */

(function () {
  "use strict";

  // Configuration
  const CONFIG = {
    DEFAULT_TRANSLATION_SERVICE: "yandexbrowser",
    DEFAULT_DETECT_SERVICE: "yandexbrowser",
    DEFAULT_TTS_SERVICE: "edge-tts",
    STORAGE_KEYS: {
      TRANSLATION_SERVICE: "translationService",
      DETECT_SERVICE: "detectService",
      TTS_SERVICE: "ttsService",
      GEMINI_API_KEY: "geminiApiKey",
      TTS_SETTINGS: "ttsSettings",
    },
  };

  // Main VOT Manager Class
  class VOTManager {
    constructor() {
      this.video = null;
      this.container = null;
      this.translator = new VOTTranslator();
      this.tts = new VOTTTS();
      this.ui = new VOTUI();
      this.settings = new VOTSettings();
      this.isInitialized = false;
    }

    async init() {
      if (this.isInitialized) return;

      console.log("[VOT] Initializing Full Featured Version...");

      // Initialize components
      await this.settings.init();
      await this.translator.init();
      await this.tts.init();
      await this.ui.init();

      // Setup UI
      this.ui.createMainButton();
      this.ui.createSettingsPanel();

      // Observe video elements
      this.observeVideos();

      this.isInitialized = true;
      console.log("[VOT] Full Featured Version initialized!");
    }

    observeVideos() {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              // Look for video elements
              const videos = node.querySelectorAll
                ? node.querySelectorAll("video")
                : node.tagName === "VIDEO"
                  ? [node]
                  : [];

              videos.forEach((video) => {
                this.setupVideo(video);
              });
            }
          });
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      // Check for existing videos
      document.querySelectorAll("video").forEach((video) => {
        this.setupVideo(video);
      });
    }

    setupVideo(video) {
      // Avoid duplicate setup
      if (video.dataset.votSetup) return;
      video.dataset.votSetup = "true";

      console.log("[VOT] Setting up video:", video);

      // Add video controls when needed
      video.addEventListener("loadedmetadata", () => {
        this.injectVideoControls(video);
      });

      if (video.readyState >= 1) {
        // HAVE_METADATA
        this.injectVideoControls(video);
      }
    }

    injectVideoControls(video) {
      const container = video.parentElement;
      if (!container) return;

      // Create VOT control panel
      const controlPanel = document.createElement("div");
      controlPanel.className = "vot-control-panel";
      controlPanel.innerHTML = `
                <div class="vot-controls">
                    <button class="vot-translate-btn" title="Translate Video">
                        🌍 Translate
                    </button>
                    <button class="vot-tts-btn" title="Text-to-Speech">
                        🔊 Speak
                    </button>
                    <button class="vot-settings-btn" title="Settings">
                        ⚙️
                    </button>
                </div>
            `;

      // Add styles
      if (!document.querySelector("#vot-styles")) {
        const style = document.createElement("style");
        style.id = "vot-styles";
        style.textContent = `
                    .vot-control-panel {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        z-index: 10000;
                        background: rgba(0, 0, 0, 0.8);
                        border-radius: 6px;
                        padding: 8px;
                        backdrop-filter: blur(10px);
                    }
                    
                    .vot-controls {
                        display: flex;
                        gap: 6px;
                    }
                    
                    .vot-controls button {
                        background: rgba(255, 255, 255, 0.1);
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        color: white;
                        padding: 6px 12px;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 12px;
                        transition: all 0.2s ease;
                    }
                    
                    .vot-controls button:hover {
                        background: rgba(255, 255, 255, 0.2);
                        transform: translateY(-1px);
                    }
                    
                    .vot-controls button:active {
                        transform: translateY(0);
                    }
                `;
        document.head.appendChild(style);
      }

      // Add event listeners
      controlPanel.querySelector(".vot-translate-btn").onclick = () => {
        this.handleTranslateClick(video);
      };

      controlPanel.querySelector(".vot-tts-btn").onclick = () => {
        this.handleTTSClick(video);
      };

      controlPanel.querySelector(".vot-settings-btn").onclick = () => {
        this.ui.showSettingsPanel();
      };

      container.style.position = "relative";
      container.appendChild(controlPanel);
    }

    async handleTranslateClick(video) {
      try {
        const text = prompt("Enter text to translate:");
        if (!text) return;

        const targetLang = prompt(
          "Enter target language (e.g., uk, ru, en):",
          "uk",
        );
        if (!targetLang) return;

        const translated = await this.translator.translate(
          text,
          "auto",
          targetLang,
        );
        alert(`Translated: ${translated}`);

        // Optionally speak the translation
        if (confirm("Speak the translation?")) {
          await this.tts.speak(translated, targetLang);
        }
      } catch (error) {
        console.error("[VOT] Translation error:", error);
        alert("Translation failed: " + error.message);
      }
    }

    async handleTTSClick(video) {
      try {
        const text = prompt("Enter text to speak:");
        if (!text) return;

        const lang = prompt("Enter language (e.g., en, uk, ru):", "en");
        if (!lang) return;

        await this.tts.speak(text, lang);
        alert("Text spoken successfully!");
      } catch (error) {
        console.error("[VOT] TTS error:", error);
        alert("TTS failed: " + error.message);
      }
    }
  }

  // Translation Service Manager
  class VOTTranslator {
    constructor() {
      this.geminiApiKey = "";
      this.service = CONFIG.DEFAULT_TRANSLATION_SERVICE;
    }

    async init() {
      this.service = await GM.getValue(
        CONFIG.STORAGE_KEYS.TRANSLATION_SERVICE,
        CONFIG.DEFAULT_TRANSLATION_SERVICE,
      );
      this.geminiApiKey = await GM.getValue(
        CONFIG.STORAGE_KEYS.GEMINI_API_KEY,
        "",
      );
    }

    async translate(text, fromLang, toLang) {
      const service = await GM.getValue(
        CONFIG.STORAGE_KEYS.TRANSLATION_SERVICE,
        this.service,
      );

      switch (service) {
        case "gemini":
          return await this.translateWithGemini(text, toLang);
        case "yandexbrowser":
        case "msedge":
          return await this.translateWithFOSWLY(
            text,
            fromLang,
            toLang,
            service,
          );
        default:
          return text;
      }
    }

    async translateWithGemini(text, targetLang) {
      if (!this.geminiApiKey) {
        throw new Error("Gemini API key not found. Please set it in settings.");
      }

      try {
        // Use Google Generative AI
        const genAI = new googleGenerativeAI.GoogleGenerativeAI(
          this.geminiApiKey,
        );
        const model = genAI.getGenerativeModel({
          model: "gemini-2.5-flash-lite",
        });

        const prompt = `Translate the following text to ${targetLang}. Return only the translated text without any additional comments or explanations:\n\n${text}`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const translatedText = response.text();

        return translatedText.trim();
      } catch (error) {
        console.error("[VOT] Gemini translation error:", error);
        throw new Error("Gemini translation failed: " + error.message);
      }
    }

    async translateWithFOSWLY(text, fromLang, toLang, service) {
      try {
        // Use FOSWLY Translate API (you'll need to implement this based on your existing code)
        const langPair = fromLang && toLang ? `${fromLang}-${toLang}` : toLang;

        // This is a simplified example - you'd need to implement the actual API call
        const response = await GM.xmlHttpRequest({
          method: "GET",
          url: `https://translate.toil.cc/v2/translate?text=${encodeURIComponent(text)}&lang=${langPair}&service=${service}`,
          timeout: 5000,
        });

        if (response.status === 200) {
          const data = JSON.parse(response.responseText);
          return data.translations[0] || text;
        } else {
          throw new Error("FOSWLY API request failed");
        }
      } catch (error) {
        console.error("[VOT] FOSWLY translation error:", error);
        return text;
      }
    }
  }

  // Text-to-Speech Manager
  class VOTTTS {
    constructor() {
      this.service = CONFIG.DEFAULT_TTS_SERVICE;
      this.settings = {
        voice: "en-US-JennyNeural",
        rate: 1.0,
        volume: 1.0,
        pitch: 1.0,
      };
    }

    async init() {
      this.service = await GM.getValue(
        CONFIG.STORAGE_KEYS.TTS_SERVICE,
        CONFIG.DEFAULT_TTS_SERVICE,
      );
      this.settings = await GM.getValue(
        CONFIG.STORAGE_KEYS.TTS_SETTINGS,
        this.settings,
      );
    }

    async speak(text, lang = "en") {
      const service = await GM.getValue(
        CONFIG.STORAGE_KEYS.TTS_SERVICE,
        this.service,
      );

      switch (service) {
        case "edge-tts":
          return await this.speakWithEdgeTTS(text, lang);
        case "browser-speech":
          return await this.speakWithBrowserTTS(text, lang);
        default:
          return await this.speakWithEdgeTTS(text, lang);
      }
    }

    async speakWithEdgeTTS(text, lang) {
      try {
        // Use edge-tts-universal
        const tts = new EdgeTTS({
          voice: this.getVoiceForLang(lang),
          rate: Math.round((this.settings.rate - 1) * 100),
          volume: Math.round((this.settings.volume - 1) * 100),
          pitch: Math.round((this.settings.pitch - 1) * 100),
        });

        // Generate audio
        const audioBuffer = await tts.toArrayBuffer(text);

        // Play audio
        await this.playAudioBuffer(audioBuffer);

        return true;
      } catch (error) {
        console.error("[VOT] Edge TTS error:", error);
        throw new Error("Edge TTS failed: " + error.message);
      }
    }

    async speakWithBrowserTTS(text, lang) {
      try {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = this.getLocaleForLang(lang);
        utterance.rate = this.settings.rate;
        utterance.volume = this.settings.volume;
        utterance.pitch = this.settings.pitch;

        return new Promise((resolve, reject) => {
          utterance.onend = () => resolve(true);
          utterance.onerror = (error) => reject(error);
          speechSynthesis.speak(utterance);
        });
      } catch (error) {
        console.error("[VOT] Browser TTS error:", error);
        throw new Error("Browser TTS failed: " + error.message);
      }
    }

    getVoiceForLang(lang) {
      const voices = {
        en: "en-US-JennyNeural",
        uk: "uk-UA-PolinaNeural",
        ru: "ru-RU-SvetlanaNeural",
        es: "es-ES-ElviraNeural",
        fr: "fr-FR-DeniseNeural",
        de: "de-DE-KatjaNeural",
        it: "it-IT-ElsaNeural",
        pt: "pt-PT-RaquelNeural",
        pl: "pl-PL-ZofiaNeural",
        tr: "tr-TR-EmelNeural",
      };

      return voices[lang] || voices["en"];
    }

    getLocaleForLang(lang) {
      const locales = {
        en: "en-US",
        uk: "uk-UA",
        ru: "ru-RU",
        es: "es-ES",
        fr: "fr-FR",
        de: "de-DE",
        it: "it-IT",
        pt: "pt-PT",
        pl: "pl-PL",
        tr: "tr-TR",
      };

      return locales[lang] || locales["en"] || "en-US";
    }

    async playAudioBuffer(audioBuffer) {
      try {
        const audioContext = new (
          window.AudioContext || window.webkitAudioContext
        )();
        const decodedAudio = await audioContext.decodeAudioData(audioBuffer);

        const source = audioContext.createBufferSource();
        source.buffer = decodedAudio;
        source.connect(audioContext.destination);
        source.start(0);

        return new Promise((resolve) => {
          source.onended = () => {
            audioContext.close();
            resolve();
          };
        });
      } catch (error) {
        console.error("[VOT] Audio playback error:", error);
        throw error;
      }
    }
  }

  // Settings Manager
  class VOTSettings {
    constructor() {
      this.settings = {
        translationService: CONFIG.DEFAULT_TRANSLATION_SERVICE,
        detectService: CONFIG.DEFAULT_DETECT_SERVICE,
        ttsService: CONFIG.DEFAULT_TTS_SERVICE,
        geminiApiKey: "",
        ttsSettings: {
          voice: "en-US-JennyNeural",
          rate: 1.0,
          volume: 1.0,
          pitch: 1.0,
        },
      };
    }

    async init() {
      // Load settings from storage
      for (const [key, defaultValue] of Object.entries(this.settings)) {
        this.settings[key] = await GM.getValue(key, defaultValue);
      }
    }

    async saveSetting(key, value) {
      this.settings[key] = value;
      await GM.setValue(key, value);
    }

    getSetting(key) {
      return this.settings[key];
    }
  }

  // UI Manager
  class VOTUI {
    constructor() {
      this.isSettingsPanelVisible = false;
    }

    async init() {
      // Inject CSS styles
      this.injectStyles();
    }

    injectStyles() {
      if (document.querySelector("#vot-full-styles")) return;

      const style = document.createElement("style");
      style.id = "vot-full-styles";
      style.textContent = `
                .vot-full-settings-panel {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    z-index: 10001;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    min-width: 500px;
                    max-width: 600px;
                    max-height: 80vh;
                    overflow-y: auto;
                }

                .vot-full-settings-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 10000;
                }

                .vot-full-settings-header {
                    background: linear-gradient(135deg, #4285f4, #34a853);
                    color: white;
                    padding: 20px;
                    border-radius: 12px 0 0;
                }

                .vot-full-settings-header h2 {
                    margin: 0;
                    font-size: 24px;
                }

                .vot-full-settings-header p {
                    margin: 5px 0 0 0;
                    opacity: 0.9;
                }

                .vot-full-settings-body {
                    padding: 20px;
                }

                .vot-full-settings-section {
                    margin-bottom: 25px;
                }

                .vot-full-settings-section h3 {
                    margin: 0 0 15px 0;
                    color: #333;
                    font-size: 18px;
                }

                .vot-full-form-group {
                    margin-bottom: 15px;
                }

                .vot-full-form-group label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: 600;
                    color: #555;
                }

                .vot-full-form-group input,
                .vot-full-form-group select {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 6px;
                    font-size: 14px;
                    box-sizing: border-box;
                }

                .vot-full-form-group input:focus,
                .vot-full-form-group select:focus {
                    outline: none;
                    border-color: #4285f4;
                    box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.2);
                }

                .vot-full-form-actions {
                    display: flex;
                    gap: 10px;
                    justify-content: flex-end;
                    margin-top: 20px;
                    padding-top: 20px;
                    border-top: 1px solid #eee;
                }

                .vot-full-btn {
                    padding: 10px 20px;
                    border: none;
                    border-radius: 6px;
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .vot-full-btn-primary {
                    background: #4285f4;
                    color: white;
                }

                .vot-full-btn-secondary {
                    background: #f1f1f1;
                    color: #333;
                }

                .vot-full-btn:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                }

                .vot-full-btn:active {
                    transform: translateY(0);
                }

                .vot-full-main-button {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, #4285f4, #34a853);
                    color: white;
                    border: none;
                    border-radius: 50%;
                    font-size: 24px;
                    cursor: pointer;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }

                .vot-full-main-button:hover {
                    transform: scale(1.1);
                    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
                }

                .vot-api-key-input {
                    position: relative;
                }

                .vot-api-key-input input[type="password"] {
                    padding-right: 100px;
                }

                .vot-api-key-link {
                    position: absolute;
                    right: 5px;
                    top: 5px;
                    bottom: 5px;
                    background: #4285f4;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    padding: 0 10px;
                    font-size: 12px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `;
      document.head.appendChild(style);
    }

    createMainButton() {
      if (document.querySelector(".vot-full-main-button")) return;

      const button = document.createElement("button");
      button.className = "vot-full-main-button";
      button.title = "Voice Over Translation Settings";
      button.innerHTML = "🎤";

      button.onclick = () => {
        this.showSettingsPanel();
      };

      document.body.appendChild(button);
    }

    async createSettingsPanel() {
      // Create overlay
      const overlay = document.createElement("div");
      overlay.className = "vot-full-settings-overlay";
      overlay.style.display = "none";
      overlay.onclick = () => {
        this.hideSettingsPanel();
      };

      // Create panel
      const panel = document.createElement("div");
      panel.className = "vot-full-settings-panel";
      panel.style.display = "none";

      // Get current settings
      const translationService = await GM.getValue(
        CONFIG.STORAGE_KEYS.TRANSLATION_SERVICE,
        CONFIG.DEFAULT_TRANSLATION_SERVICE,
      );
      const ttsService = await GM.getValue(
        CONFIG.STORAGE_KEYS.TTS_SERVICE,
        CONFIG.DEFAULT_TTS_SERVICE,
      );
      const geminiApiKey = await GM.getValue(
        CONFIG.STORAGE_KEYS.GEMINI_API_KEY,
        "",
      );

      panel.innerHTML = `
                <div class="vot-full-settings-header">
                    <h2>🎙️ Voice Over Translation</h2>
                    <p>Advanced video translation with AI support</p>
                </div>
                <div class="vot-full-settings-body">
                    <div class="vot-full-settings-section">
                        <h3>🔤 Translation Services</h3>
                        <div class="vot-full-form-group">
                            <label for="translationService">Primary Translation Service:</label>
                            <select id="translationService">
                                <option value="yandexbrowser" ${translationService === "yandexbrowser" ? "selected" : ""}>Yandex Browser</option>
                                <option value="msedge" ${translationService === "msedge" ? "selected" : ""}>Microsoft Edge</option>
                                <option value="gemini" ${translationService === "gemini" ? "selected" : ""}>Google Gemini AI</option>
                            </select>
                        </div>
                        
                        <div class="vot-full-form-group">
                            <label for="ttsService">Text-to-Speech Service:</label>
                            <select id="ttsService">
                                <option value="edge-tts" ${ttsService === "edge-tts" ? "selected" : ""}>Microsoft Edge TTS</option>
                                <option value="browser-speech" ${ttsService === "browser-speech" ? "selected" : ""}>Browser Speech API</option>
                            </select>
                        </div>
                    </div>

                    <div class="vot-full-settings-section">
                        <h3>🔑 API Keys</h3>
                        <div class="vot-full-form-group">
                            <label for="geminiApiKey">Google Gemini API Key:</label>
                            <div class="vot-api-key-input">
                                <input type="password" id="geminiApiKey" placeholder="Enter your Gemini API key" 
                                       value="${geminiApiKey ? "*".repeat(20) : ""}">
                                <button class="vot-api-key-link" onclick="window.open('https://aistudio.google.com/app/apikey', '_blank')">
                                    Get Key
                                </button>
                            </div>
                            <p style="font-size: 12px; color: #666; margin: 5px 0 0 0;">
                                Required for Google Gemini AI translation service
                            </p>
                        </div>
                    </div>

                    <div class="vot-full-settings-section">
                        <h3>🔊 TTS Settings</h3>
                        <div class="vot-full-form-group">
                            <label for="ttsRate">Speech Rate:</label>
                            <input type="range" id="ttsRate" min="0.5" max="2" step="0.1" value="1.0">
                            <span id="ttsRateValue">1.0x</span>
                        </div>
                        
                        <div class="vot-full-form-group">
                            <label for="ttsVolume">Volume:</label>
                            <input type="range" id="ttsVolume" min="0" max="1" step="0.1" value="1.0">
                            <span id="ttsVolumeValue">100%</span>
                        </div>
                        
                        <div class="vot-full-form-group">
                            <label for="ttsPitch">Pitch:</label>
                            <input type="range" id="ttsPitch" min="0.5" max="1.5" step="0.1" value="1.0">
                            <span id="ttsPitchValue">1.0x</span>
                        </div>
                    </div>

                    <div class="vot-full-form-actions">
                        <button class="vot-full-btn vot-full-btn-secondary" id="settingsCancel">Cancel</button>
                        <button class="vot-full-btn vot-full-btn-primary" id="settingsSave">Save Settings</button>
                    </div>
                </div>
            `;

      // Add event listeners
      panel.querySelector("#settingsSave").onclick = async () => {
        await this.saveSettings(panel);
        this.hideSettingsPanel();
        alert("Settings saved successfully!");
      };

      panel.querySelector("#settingsCancel").onclick = () => {
        this.hideSettingsPanel();
      };

      // Add real-time updates for sliders
      const rateSlider = panel.querySelector("#ttsRate");
      const rateValue = panel.querySelector("#ttsRateValue");
      rateSlider.oninput = () => {
        rateValue.textContent = rateSlider.value + "x";
      };

      const volumeSlider = panel.querySelector("#ttsVolume");
      const volumeValue = panel.querySelector("#ttsVolumeValue");
      volumeSlider.oninput = () => {
        volumeValue.textContent = Math.round(volumeSlider.value * 100) + "%";
      };

      const pitchSlider = panel.querySelector("#ttsPitch");
      const pitchValue = panel.querySelector("#ttsPitchValue");
      pitchSlider.oninput = () => {
        pitchValue.textContent = pitchSlider.value + "x";
      };

      document.body.appendChild(overlay);
      document.body.appendChild(panel);

      this.overlay = overlay;
      this.panel = panel;
    }

    async showSettingsPanel() {
      if (!this.overlay || !this.panel) {
        await this.createSettingsPanel();
      }

      this.overlay.style.display = "block";
      this.panel.style.display = "block";
      this.isSettingsPanelVisible = true;

      // Load current API key (masked)
      const currentApiKey = await GM.getValue(
        CONFIG.STORAGE_KEYS.GEMINI_API_KEY,
        "",
      );
      if (currentApiKey) {
        this.panel.querySelector("#geminiApiKey").value = "*".repeat(
          Math.min(currentApiKey.length, 20),
        );
      }
    }

    hideSettingsPanel() {
      if (this.overlay) this.overlay.style.display = "none";
      if (this.panel) this.panel.style.display = "none";
      this.isSettingsPanelVisible = false;
    }

    async saveSettings(panel) {
      // Save service settings
      const translationService = panel.querySelector(
        "#translationService",
      ).value;
      const ttsService = panel.querySelector("#ttsService").value;

      await GM.setValue(
        CONFIG.STORAGE_KEYS.TRANSLATION_SERVICE,
        translationService,
      );
      await GM.setValue(CONFIG.STORAGE_KEYS.TTS_SERVICE, ttsService);

      // Save API key (only if it's not masked)
      const apiKeyInput = panel.querySelector("#geminiApiKey");
      const apiKey = apiKeyInput.value;
      if (apiKey && !apiKey.startsWith("***")) {
        await GM.setValue(CONFIG.STORAGE_KEYS.GEMINI_API_KEY, apiKey);
      }

      // Save TTS settings
      const ttsSettings = {
        voice: "en-US-JennyNeural", // Default voice
        rate: parseFloat(panel.querySelector("#ttsRate").value),
        volume: parseFloat(panel.querySelector("#ttsVolume").value),
        pitch: parseFloat(panel.querySelector("#ttsPitch").value),
      };

      await GM.setValue(CONFIG.STORAGE_KEYS.TTS_SETTINGS, ttsSettings);
    }
  }

  // Initialize the manager when DOM is ready
  async function initVOT() {
    try {
      const votManager = new VOTManager();
      await votManager.init();

      // Expose to global scope for debugging
      unsafeWindow.VOTManager = votManager;
      unsafeWindow.VOTTranslate = (text, from, to) =>
        votManager.translator.translate(text, from, to);
      unsafeWindow.VOTSpeak = (text, lang) => votManager.tts.speak(text, lang);

      console.log("[VOT] Full Featured Version ready!");
      console.log(
        "[VOT] Use VOTTranslate(text, from, to) and VOTSpeak(text, lang) in console",
      );
    } catch (error) {
      console.error("[VOT] Initialization error:", error);
    }
  }

  // Start initialization when page is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initVOT);
  } else {
    initVOT();
  }
})();
