import { render } from "lit-html";
import { LabelProps } from "../../types/components/label";
import { LitHtml } from "../../types/components/shared";
import UI from "../../ui";

export default class Label {
  container: HTMLElement;
  icon: HTMLElement;

  private _labelText: string;
  private _icon?: LitHtml;

  constructor({ labelText, icon }: LabelProps) {
    this._labelText = labelText;
    this._icon = icon;

    const elements = this.createElements();
    this.container = elements.container;
    this.icon = elements.icon;
  }

  private createElements() {
    const container = UI.createEl("vot-block", ["vot-label"]);
    container.textContent = this._labelText;

    const icon = UI.createEl("vot-block", ["vot-label-icon"]);
    if (this._icon) {
      render(this._icon, icon);
    }
    container.appendChild(icon);

    return {
      container,
      icon,
    };
  }

  set hidden(isHidden: boolean) {
    this.container.hidden = isHidden;
  }

  get hidden() {
    return this.container.hidden;
  }
}
