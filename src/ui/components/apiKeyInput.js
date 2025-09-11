import { css, html, LitElement } from "lit";
import { votStorage } from "../../utils/storage.js";

export class VOTApiKeyInput extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      service: { type: String },
      placeholder: { type: String },
      currentValue: { type: String, state: true },
    };
  }

  constructor() {
    super();
    this.label = "API Key";
    this.service = "gemini";
    this.placeholder = "Enter your API key...";
    this.currentValue = "";
    this.storageKey = "";
  }

  static styles = css`
    :host {
      display: block;
      margin: 12px 0;
    }

    .api-key-container {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    label {
      font-size: 14px;
      font-weight: 500;
      color: var(--vot-text-primary);
    }

    .input-wrapper {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    input {
      flex: 1;
      padding: 8px 12px;
      border: 1px solid var(--vot-border-color);
      border-radius: 4px;
      background: var(--vot-background-secondary);
      color: var(--vot-text-primary);
      font-size: 14px;
      transition: border-color 0.2s ease;
    }

    input:focus {
      outline: none;
      border-color: var(--vot-accent-color);
      box-shadow: 0 0 0 2px var(--vot-accent-color-transparent);
    }

    input::placeholder {
      color: var(--vot-text-secondary);
    }

    .action-buttons {
      display: flex;
      gap: 4px;
    }

    button {
      padding: 8px 12px;
      border: 1px solid var(--vot-border-color);
      border-radius: 4px;
      background: var(--vot-background-secondary);
      color: var(--vot-text-primary);
      font-size: 12px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    button:hover {
      border-color: var(--vot-accent-color);
      background: var(--vot-accent-color-transparent);
    }

    .save-btn {
      background: var(--vot-accent-color);
      color: white;
      border-color: var(--vot-accent-color);
    }

    .save-btn:hover {
      background: var(--vot-accent-color-dark);
      border-color: var(--vot-accent-color-dark);
    }

    .status-indicator {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 12px;
      margin-top: 4px;
    }

    .status-success {
      color: var(--vot-success-color, #28a745);
    }

    .status-error {
      color: var(--vot-error-color, #dc3545);
    }

    .status-loading {
      color: var(--vot-warning-color, #ffc107);
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      display: inline-block;
    }

    .dot-success {
      background: var(--vot-success-color, #28a745);
    }

    .dot-error {
      background: var(--vot-error-color, #dc3545);
    }

    .dot-loading {
      background: var(--vot-warning-color, #ffc107);
    }

    .help-text {
      font-size: 12px;
      color: var(--vot-text-secondary);
      margin-top: 4px;
      line-height: 1.4;
    }

    .help-text a {
      color: var(--vot-accent-color);
      text-decoration: none;
    }

    .help-text a:hover {
      text-decoration: underline;
    }
  `;

  async connectedCallback() {
    super.connectedCallback();
    await this.loadApiKey();
  }

  async loadApiKey() {
    try {
      const storageKey = this.getStorageKey();
      if (storageKey) {
        this.currentValue = await votStorage.get(storageKey, "");
        // Не показуємо сам ключ, лише довжину для безпеки
        if (this.currentValue) {
          this.currentValue = "*".repeat(
            Math.min(this.currentValue.length, 20),
          );
        }
      }
      this.requestUpdate();
    } catch (error) {
      console.error("[VOT] Error loading API key:", error);
    }
  }

  getStorageKey() {
    switch (this.service) {
      case "gemini":
        return "geminiApiKey";
      default:
        return "";
    }
  }

  handleInputChange(e) {
    this.currentValue = e.target.value;
  }

  async handleSave() {
    if (!this.currentValue.trim()) {
      this.showStatus("Please enter an API key", "error");
      return;
    }

    try {
      const storageKey = this.getStorageKey();
      if (!storageKey) {
        throw new Error("Unknown service");
      }

      // Зберігаємо справжній ключ (якщо це не маска)
      let actualKey = this.currentValue;
      if (this.currentValue.startsWith("*")) {
        // Якщо користувач не змінив замаскований ключ, отримуємо справжній
        const storedKey = await votStorage.get(storageKey, "");
        if (storedKey && storedKey.length === this.currentValue.length) {
          actualKey = storedKey;
        } else {
          this.showStatus("Please enter a new API key", "error");
          return;
        }
      }

      await votStorage.set(storageKey, actualKey);
      this.showStatus("API key saved successfully!", "success");

      // Оновлюємо відображення
      this.currentValue = "*".repeat(Math.min(actualKey.length, 20));

      // Викидаємо подію зміни
      this.dispatchEvent(
        new CustomEvent("api-key-saved", {
          detail: { service: this.service, key: actualKey },
          bubbles: true,
          composed: true,
        }),
      );

      // Якщо це Gemini API, оновлюємо його в системі перекладу
      if (this.service === "gemini") {
        try {
          const translateModule = await import("../../utils/translateApis.js");
          if (
            translateModule.GeminiAPI &&
            typeof translateModule.GeminiAPI.updateApiKey === "function"
          ) {
            await translateModule.GeminiAPI.updateApiKey(actualKey);
          }
        } catch (error) {
          console.warn(
            "[VOT] Could not update Gemini API key in translate module:",
            error,
          );
        }
      }
    } catch (error) {
      console.error("[VOT] Error saving API key:", error);
      this.showStatus("Error saving API key: " + error.message, "error");
    }
  }

  async handleClear() {
    try {
      const storageKey = this.getStorageKey();
      if (!storageKey) {
        throw new Error("Unknown service");
      }

      await votStorage.set(storageKey, "");
      this.currentValue = "";
      this.showStatus("API key cleared successfully!", "success");

      // Викидаємо подію очищення
      this.dispatchEvent(
        new CustomEvent("api-key-cleared", {
          detail: { service: this.service },
          bubbles: true,
          composed: true,
        }),
      );

      // Якщо це Gemini API, оновлюємо його
      if (this.service === "gemini") {
        try {
          const translateModule = await import("../../utils/translateApis.js");
          if (
            translateModule.GeminiAPI &&
            typeof translateModule.GeminiAPI.updateApiKey === "function"
          ) {
            await translateModule.GeminiAPI.updateApiKey("");
          }
        } catch (error) {
          console.warn(
            "[VOT] Could not clear Gemini API key in translate module:",
            error,
          );
        }
      }
    } catch (error) {
      console.error("[VOT] Error clearing API key:", error);
      this.showStatus("Error clearing API key: " + error.message, "error");
    }
  }

  showStatus(message, type = "info") {
    // Видаляємо попередній статус
    const existingStatus = this.renderRoot?.querySelector(".status-indicator");
    if (existingStatus) {
      existingStatus.remove();
    }

    // Створюємо новий статус
    const statusDiv = document.createElement("div");
    statusDiv.className = `status-indicator status-${type}`;
    statusDiv.innerHTML = `
      <span class="dot dot-${type}"></span>
      ${message}
    `;

    // Додаємо статус до контейнера
    const container = this.renderRoot?.querySelector(".api-key-container");
    if (container) {
      container.appendChild(statusDiv);

      // Автоматично видаляємо статус через 3 секунди
      setTimeout(() => {
        if (statusDiv.parentNode === container) {
          container.removeChild(statusDiv);
        }
      }, 3000);
    }
  }

  render() {
    return html`
      <div class="api-key-container">
        <label>${this.label}</label>
        <div class="input-wrapper">
          <input
            type="password"
            .value=${this.currentValue}
            .placeholder=${this.placeholder}
            @input=${this.handleInputChange}
          />
          <div class="action-buttons">
            <button class="save-btn" @click=${this.handleSave}>Save</button>
            <button @click=${this.handleClear}>Clear</button>
          </div>
        </div>
        ${this.renderHelpText()}
      </div>
    `;
  }

  renderHelpText() {
    switch (this.service) {
      case "gemini":
        return html`
          <div class="help-text">
            Get your Gemini API key from 
            <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer">
              Google AI Studio
            </a>. 
            This key is stored locally in your browser and is only used for translation requests.
          </div>
        `;
      default:
        return "";
    }
  }
}

customElements.define("vot-api-key-input", VOTApiKeyInput);
