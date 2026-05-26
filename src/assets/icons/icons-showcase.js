import { LitElement, html, css, nothing } from "lit";
import { icons, iconCategories } from "./icons";

export class IconsShowcase extends LitElement {
  static styles = css`
    .container {
      width: 90vw;
      margin: 0 auto;
    }

    header {
      text-align: center;
      margin-bottom: 50px;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
      background: linear-gradient(90deg, #d8b9ff, #4cd7f6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .search-container {
      width: 100%;
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }

    .search-input {
      width: 100%;
      max-width: 500px;
      padding: 15px 25px;
      border-radius: 30px;
      border: 1px solid rgba(76, 215, 246, 0.3);
      background: #121212;
      color: white;
      font-size: 1rem;
      outline: none;
      transition: border-color 0.3s ease;
    }

    .search-input:focus {
      border-color: #4cd7f6;
    }

    .stats {
      color: #a0a0a0;
      font-size: 0.9rem;
    }

    .category-section {
      margin-bottom: 60px;
    }

    .category-title {
      font-size: 1.2rem;
      color: #d8b9ff;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(216, 185, 255, 0.2);
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 20px;
    }

    .icon-card {
      background: #121212;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 30px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .icon-card:hover {
      border-color: #4cd7f6;
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(76, 215, 246, 0.1);
      background: #1a1a1a;
    }

    .icon-wrapper {
      font-size: 40px;
      margin-bottom: 15px;
      color: #4cd7f6;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon-name {
      font-size: 14px;
      font-weight: 500;
      color: #a0a0a0;
      text-align: center;
    }
  `;

  static properties = {
    _searchTerm: { state: true },
  };

  constructor() {
    super();
    this._searchTerm = "";
  }

  _handleSearch(e) {
    this._searchTerm = e.target.value.toLowerCase();
  }

  render() {
    const filteredIcons = Object.entries(icons).filter(([name]) => name.toLowerCase().includes(this._searchTerm));

    return html`
      <div class="container">
        <header>
          <h1>Icon Gallery</h1>
          <p>Mercurix Labs Design System</p>
        </header>

        <div class="search-container">
          <input type="text" class="search-input" placeholder="Search icons..." @input=${this._handleSearch} />
          <p class="stats">Showing ${filteredIcons.length} of ${Object.keys(icons).length} icons</p>
        </div>

        ${Object.entries(iconCategories).map(([categoryName, categoryIcons]) => {
          const filteredInEntry = Object.entries(categoryIcons).filter(([name]) => name.toLowerCase().includes(this._searchTerm));

          if (filteredInEntry.length === 0) return nothing;

          return html`
            <section class="category-section">
              <h2 class="category-title">${categoryName}</h2>
              <div class="grid">
                ${filteredInEntry.map(
                  ([name, icon]) => html`
                    <div class="icon-card" @click=${() => this._copyToClipboard(name)}>
                      <div class="icon-wrapper">${icon}</div>
                      <div class="icon-name">${name}</div>
                    </div>
                  `,
                )}
              </div>
            </section>
          `;
        })}
      </div>
    `;
  }

  _copyToClipboard(name) {
    navigator.clipboard.writeText(name);
    alert(`Nombre del icono "${name}" copiado al portapapeles`);
  }
}

customElements.define("icons-showcase", IconsShowcase);
