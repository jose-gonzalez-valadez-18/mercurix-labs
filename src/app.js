import { LitElement, html, css } from "lit";
import { initRouter } from "./router/router.js";

import "./components/layout/app-header/app-header";
import "./components/layout/app-footer/app-footer";

export class AppRoot extends LitElement {
  static styles = css`
    main {
      width: 100%;
      box-sizing: border-box;
    }
  `;

  firstUpdated() {
    const outlet = this.renderRoot.querySelector("#router-outlet");
    initRouter(outlet);
  }

  render() {
    return html`
      <app-header></app-header>
      <main id="router-outlet"></main>
      <app-footer></app-footer>
    `;
  }
}

customElements.define("app-root", AppRoot);
