import { LitElement, html } from "lit";

import { styles } from "./hero-main.styles.js";

export class HeroMain extends LitElement {
  static styles = styles;

  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
      <section class="hero-main">
        <article class="content">
          <p class="tag">PREMIUM WEB DEVELOPMENT</p>
          <h2>Arquitectos de Experiencias Digitales</h2>
          <p class="description">
            We engineer high-performance websites that bridge the gap between complex digital architecture and intuitive human interaction. Scalable, secure, and visually stunning.
          </p>
          <div class="buttons">
            <a class="main-button" href="">Get Started</a>
            <a class="secondary-button" href="">Our Portfolio</a>
          </div>
        </article>
        <article class="illustration">
        </article>
      </section>
    `;
  }
}

customElements.define("hero-main", HeroMain);
