import { LitElement, html } from "lit";

import { styles } from "./card-link.styles";
import { icons } from "../../../assets/icons/icons";

export class AppCardLink extends LitElement {
  static styles = styles;

  static properties = {
    text: { type: String },
  };

  constructor() {
    super();

    this.text = "card";
  }

  render() {
    return html`
      <article class="card-link">
        <div class="image-container">
          <img src="/public/assets/services/web.webp" alt="" />
          <p class="tag">PAGINA WEB</p>
        </div>
        <div class="text-container">
          <p class="copy">Sube de nivel tu negocio con presencia digital</p>
          <p class="tecnology">Desarrollo AstroJS y NextJs con expertos</p>
          <nav>
            <ul>
              <li>
                <span> ${icons.checkCircle}</span>
                <p>Precios Competitivos</p>
              </li>
              <li>
                <span> ${icons.checkCircle}</span>
                <p>Posicionamiento SEO</p>
              </li>
              <li>
                <span> ${icons.checkCircle}</span>
                <p>Optimizacion y accesibilidad</p>
              </li>
              <li>
                <span> ${icons.checkCircle}</span>
                <p>Diseno responsivo</p>
              </li>
              <li>
                <span> ${icons.checkCircle}</span>
                <p>Arquitectura limpia y escalable</p>
              </li>
            </ul>
          </nav>
        </div>
        <a class="more" href=""
          ><p>Mas informacion</p>
          <span> ${icons.arrowRight}</span></a
        >
      </article>
    `;
  }
}

customElements.define("app-card-link", AppCardLink);
