import { LitElement, html } from "lit";

import { styles } from "./app-title.styles";

export class AppTitle extends LitElement {
  static styles = styles;

  static properties = {
    text: { type: String },
  };

  constructor() {
    super();

    this.text = "";
  }

  render() {
    return html`
      <article class="section-title">
        <h2>${this.text}</h2>
      </article>
    `;
  }
}

customElements.define("app-title", AppTitle);
