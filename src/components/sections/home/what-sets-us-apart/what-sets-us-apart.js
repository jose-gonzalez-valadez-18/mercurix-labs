import { LitElement, html } from "lit";

import { styles } from "./what-sets-us-apart.styles";
import "../../../ui/card-link/card-link";
import { icons } from "../../../../assets/icons/icons";

export class WhatSetsUsApart extends LitElement {
  static styles = styles;

  render() {
    return html`
      <section class="what-sets-us-apart">
        <article class="container">
          <div class="card">
            <span>${icons.lock}</span>
            <h3></h3>
            <p class="description"></p>
          </div>
        </article>
      </section>
    `;
  }
}

customElements.define("what-sets-us-apart", WhatSetsUsApart);
