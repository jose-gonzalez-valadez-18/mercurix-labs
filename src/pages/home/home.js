import { LitElement, html, css } from "lit";

import { styles } from "./home.styles";
import "../../components/sections/hero-main/hero-main";
import "../../components/ui/app-title/app-title";
export class PageHome extends LitElement {
  static styles = styles;

  static properties = { mensaje: { type: String } };

  constructor() {
    super();
    this.mensaje = "Hola mundo";
  }

  render() {
    return html`
      <hero-main></hero-main>
      <app-title text="Servicios Populares"></app-title>

    `;
  }
}
customElements.define("page-home", PageHome);
