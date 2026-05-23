import { LitElement, html, css } from "lit";

import { styles } from "./home.styles";
import "../../components/sections/hero-main/hero-main";
import "../../components/sections/home/popular-services/popular-services";
import "../../components/sections/home/what-sets-us-apart/what-sets-us-apart";
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
      <popular-services></popular-services>
      <app-title text="¿Qué nos hace diferentes?"></app-title>
      <what-sets-us-apart></what-sets-us-apart>
    `;
  }
}
customElements.define("page-home", PageHome);
