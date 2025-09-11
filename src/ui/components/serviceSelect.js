import { css, html, LitElement } from "lit";

export class VOTServiceSelect extends LitElement {
  static get properties() {
    return {
      type: { type: String },
      label: { type: String },
    };
  }

  constructor() {
    super();
    this.type = "translation";
    this.label = "";
    this._selectedService = "";
    this._availableServices = [];
  }

  static styles = css`
    :host {
      display: block;
      margin: 8px 0;
    }

    .service-select-container {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    label {
      font-size: 14px;
      font-weight: 500;
      color: var(--vot-text-primary);
    }

    select {
      padding: 8px 12px;
      border: 1px solid var(--vot-border-color);
      border-radius: 4px;
      background: var(--vot-background-secondary);
      color: var(--vot-text-primary);
      font-size: 14px;
      cursor: pointer;
      transition: border-color 0.2s ease;
    }

    select:hover {
      border-color: var(--vot-accent-color);
    }

    select:focus {
      outline: none;
      border-color: var(--vot-accent-color);
      box-shadow: 0 0 0 2px var(--vot-accent-color-transparent);
    }
  `;

  async connectedCallback() {
    super.connectedCallback();
    await this._loadServices();
    await this._loadSelectedService();
  }

  async _loadServices() {
    // Імпортуємо сервіси локально для уникнення проблем з типами
    const translateServices = ["yandexbrowser", "msedge", "gemini"];
    const detectServices = ["yandexbrowser", "msedge", "rust-server"];

    switch (this.type) {
      case "translation":
        this._availableServices = [...translateServices];
        break;
      case "detect":
        this._availableServices = [...detectServices];
        break;
      case "tts":
        this._availableServices = ["edge-tts", "browser-speech", "custom"];
        break;
    }
  }

  async _loadSelectedService() {
    // Імпортуємо votStorage локально
    const storageModule = await import("../../utils/storage.js");
    const votStorage = storageModule.votStorage;

    switch (this.type) {
      case "translation":
        this._selectedService = await votStorage.get(
          "translationService",
          "yandexbrowser",
        );
        break;
      case "detect":
        this._selectedService = await votStorage.get(
          "detectService",
          "yandexbrowser",
        );
        break;
      case "tts":
        const ttsSettings = await votStorage.get("ttsSettings", {
          voice: "en-US-JennyNeural",
          rate: 1.0,
          volume: 1.0,
          pitch: 1.0,
          service: "edge-tts",
        });
        this._selectedService = ttsSettings.service;
        break;
    }
    this.requestUpdate();
  }

  async _handleServiceChange(e) {
    const select = e.target;
    this._selectedService = select.value;

    // Імпортуємо votStorage локально
    const storageModule = await import("../../utils/storage.js");
    const votStorage = storageModule.votStorage;

    switch (this.type) {
      case "translation":
        await votStorage.set("translationService", this._selectedService);
        break;
      case "detect":
        await votStorage.set("detectService", this._selectedService);
        break;
      case "tts":
        const currentSettings = await votStorage.get("ttsSettings", {
          voice: "en-US-JennyNeural",
          rate: 1.0,
          volume: 1.0,
          pitch: 1.0,
          service: "edge-tts",
        });
        await votStorage.set("ttsSettings", {
          ...currentSettings,
          service: this._selectedService,
        });
        break;
    }

    // Викидаємо подію зміни
    this.dispatchEvent(
      new CustomEvent("service-change", {
        detail: { service: this._selectedService, type: this.type },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`
      <div class="service-select-container">
        <label>${this.label}</label>
        <select 
          .value="${this._selectedService}"
          @change="${this._handleServiceChange}"
        >
          ${this._availableServices.map(
            (service) =>
              html`<option value="${service}">${this._getServiceDisplayName(service)}</option>`,
          )}
        </select>
      </div>
    `;
  }

  _getServiceDisplayName(service) {
    const displayNames = {
      yandexbrowser: "Yandex Browser",
      msedge: "Microsoft Edge",
      "rust-server": "Rust Server",
      gemini: "Google Gemini AI",
      "edge-tts": "Microsoft Edge TTS",
      "browser-speech": "Browser Speech API",
      custom: "Custom TTS",
    };

    return displayNames[service] || service;
  }
}

customElements.define("vot-service-select", VOTServiceSelect);
