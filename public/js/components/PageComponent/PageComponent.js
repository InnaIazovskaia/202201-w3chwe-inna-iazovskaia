import Component from "../Component.js";

class PageComponent extends Component {
  constructor(parentElement, pageTitle) {
    super(parentElement, "page");
    this.pageTitle = pageTitle;
  }

  generateHTML() {
    this.element.innerHTML = `
    <header class="header">
      <nav class="nav">
        <img class="logo" src="../images/pokemon-logo.svg" alt="Pokémon logo" />
        <a class="nav__item" href="#">All pokémons</a>
        <a class="nav__item" href="#">My pokémons</a>
        <a class="nav__item" href="#">Pokémon details</a>
      </nav>
      <h1 class="header__title">${this.pageTitle}</h1>
    </header>
    <main class="main"></main>
    `;
  }
}

export default PageComponent;
