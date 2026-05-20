import { LitElement, html } from "lit";

import { styles } from "./app-header.styles.js";
import { icons } from "../../../assets/icons/icons.js";

export class AppHeader extends LitElement {
  static styles = styles;

  static properties = {
    menuOpen: { type: Boolean },
  };

  constructor() {
    super();

    this.menuOpen = false;

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    document.addEventListener("click", this.handleOutsideClick);

    window.addEventListener("scroll", this.handleScroll);

    window.addEventListener("resize", this.handleResize);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    document.removeEventListener("click", this.handleOutsideClick);

    window.removeEventListener("scroll", this.handleScroll);

    window.removeEventListener("resize", this.handleResize);
  }

  toggleMenu(e) {
    e.stopPropagation();

    this.menuOpen = !this.menuOpen;

    document.body.classList.toggle("menu-open", this.menuOpen);
  }

  closeMenu() {
    this.menuOpen = false;

    document.body.classList.remove("menu-open");
  }

  handleScroll() {
    if (this.menuOpen) {
      this.closeMenu();
    }
  }

  handleResize() {
    if (window.innerWidth >= 1024 && this.menuOpen) {
      this.closeMenu();
    }
  }

  handleOutsideClick(e) {
    const nav = this.renderRoot.querySelector("nav");
    const button = this.renderRoot.querySelector("#hamburguer-button");

    const clickedInsideNav = nav.contains(e.target);

    const clickedButton = button.contains(e.target);

    if (this.menuOpen && !clickedInsideNav && !clickedButton) {
      this.closeMenu();
    }
  }

  render() {
    return html`
      <section class="header-space"></section>

      <header>
        <a href="/"
          ><picture>
            <source media="(max-width: 767px)" srcset="/assets/brand/logo-col.webp" />

            <img src="/assets/brand/logo-row.webp" alt="Mercurix Labs" /> </picture
        ></a>

        <nav class=${this.menuOpen ? "active" : ""}>
          <ul>
            <li><a href="">Services</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">About</a></li>
          </ul>
        </nav>

        <a href="/contact" class="primary-button"> Let's Talk </a>

        <button id="hamburguer-button" class=${this.menuOpen ? "active" : ""} @click=${this.toggleMenu}>${this.menuOpen ? icons.close : icons.menu}</button>
      </header>
    `;
  }
}

customElements.define("app-header", AppHeader);
