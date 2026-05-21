import { LitElement, html } from "lit";

import { styles } from "./popular-services.styles";
import "../../../ui/card-link/card-link";
import { icons } from "../../../../assets/icons/icons";

export class PopularServices extends LitElement {
  static styles = styles;

  static properties = {
    activeIndex: { type: Number },
  };

  constructor() {
    super();
    this.activeIndex = 0;
  }

  _goTo(index) {
    this.activeIndex = index;
  }

  _prev() {
    this.activeIndex = this.activeIndex > 0 ? this.activeIndex - 1 : 2;
  }

  _next() {
    this.activeIndex = this.activeIndex < 2 ? this.activeIndex + 1 : 0;
  }

  render() {
    return html`
      <section class="popular-services">
        <div class="carousel-container">
          <button class="nav-button prev" @click=${this._prev} aria-label="Anterior">${icons.arrowLeft}</button>

          <div class="carousel-track" style="transform: translateX(-${this.activeIndex * 100}%);">
            <app-card-link></app-card-link>
            <app-card-link></app-card-link>
            <app-card-link></app-card-link>
          </div>

          <button class="nav-button next" @click=${this._next} aria-label="Siguiente">${icons.arrowRight}</button>
        </div>

        <div class="carousel-nav">
          ${[0, 1, 2].map((i) => html` <button class="dot ${this.activeIndex === i ? "active" : ""}" @click=${() => this._goTo(i)} aria-label="Ir a slide ${i + 1}"></button> `)}
        </div>
      </section>
    `;
  }
}

customElements.define("popular-services", PopularServices);
