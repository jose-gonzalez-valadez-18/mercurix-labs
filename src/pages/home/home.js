import { LitElement, html, css } from "lit";

import { styles } from "./home.styles";

export class PageHome extends LitElement {

  static styles = styles;

  static properties = { mensaje: { type: String } };

  constructor() {
    super();
    this.mensaje = "Hola mundo";
  }

  render() {
    return html` <p>${this.mensaje}</p> `;
  }
}
customElements.define("page-home", PageHome);
