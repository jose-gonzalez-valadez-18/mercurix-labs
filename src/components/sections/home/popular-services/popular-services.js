import { LitElement, html } from "lit";

import { styles } from "./popular-services.styles";
import "../../../ui/card-link/card-link";
import { icons } from "../../../../assets/icons/icons";

export class PopularServices extends LitElement {
  static styles = styles;

  firstUpdated() {
    this.wrapper.addEventListener("scroll", () => {
      this.requestUpdate();
    });
  }

  nextSlide() {
    this.wrapper.scrollLeft += this.wrapper.clientWidth;
  }

  prevSlide() {
    this.wrapper.scrollLeft -= this.wrapper.clientWidth;
  }

  get wrapper() {
    return this.renderRoot.querySelector(".carrousel-wrapper");
  }

  render() {
    return html`
      <section class="popular-services">
        <div class="carrousel-container">
          <button class="prev" ?disabled=${!this.wrapper || this.wrapper.scrollLeft <= 0} @click=${this.prevSlide}>${icons.arrowLeft}</button>
          <div class="carrousel-wrapper">
            <app-card-link></app-card-link>
            <app-card-link></app-card-link>
            <app-card-link></app-card-link>
          </div>

          <button class="next" ?disabled=${this.wrapper?.scrollLeft + this.wrapper?.clientWidth >= this.wrapper?.scrollWidth - 5} @click=${this.nextSlide}>
            ${icons.arrowRight}
          </button>
        </div>
      </section>
    `;
  }
}

customElements.define("popular-services", PopularServices);
