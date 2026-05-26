import { LitElement, html, css } from "lit";

import { styles } from "./services.styles";
export class PageServices extends LitElement {
  static styles = styles;

  static properties = { mensaje: { type: String } };

  constructor() {
    super();
    this.mensaje = "sETYIUYG";
  }

  render() {
    return html`
      <p>${this.mensaje}</p>
   `;
  }
}
customElements.define("page-services", PageServices);
