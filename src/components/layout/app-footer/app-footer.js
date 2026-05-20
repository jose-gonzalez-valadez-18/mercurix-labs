import { LitElement, html } from "lit";

import { styles } from "./app-footer.styles.js";
import { icons } from "../../../assets/icons/icons.js";

export class AppFooter extends LitElement {
  static styles = styles;

  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
      <footer>
        <section class="content">
          <article class="info">
            <img src="/assets/brand/logo-row.webp" alt="Mercurix Labs" />
            <p class="description">Building the digital infrastructure for the leaders of tomorrow. Premium engineering, superior aesthetics.</p>
          </article>
          <article class="connect">
            <h3>CONNECT</h3>
            <nav>
              <ul>
                <li><a href="">Github</a></li>
                <li><a href="">LinkedIn</a></li>
                <li><a href="">Facebook</a></li>
              </ul>
            </nav>
          </article>
          <article class="newsletter">
            <h3>NEWSLETTER</h3>
            <form action="">
              <input type="text" placeholder="Your email" />
              <button>${icons.sendMail}</button>
            </form>
          </article>
        </section>
        <section class="copyright">
          <p>© 2024 DevArchitect Agency. Built for the future of the web.</p>
          <nav>
            <ul>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Terms of Service</a></li>
            </ul>
          </nav>
        </section>
      </footer>
    `;
  }
}

customElements.define("app-footer", AppFooter);
