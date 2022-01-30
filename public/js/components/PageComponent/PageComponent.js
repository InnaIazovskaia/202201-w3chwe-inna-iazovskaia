import Component from "../Component.js";
import PokemonCardComponent from "../PokemonComponent/PokemonCardComponent.js";

class PageComponent extends Component {
  constructor(parentElement, pageTitle, pokemonsData) {
    super(parentElement, "container", "div");
    this.pageTitle = pageTitle;
    this.pokemonsData = pokemonsData;

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
      <header class="header">
        <img class="logo" src="./images/pokemon-logo.svg" alt="Pokémon logo" />
          <nav class="nav">
            <a class="nav__item" href="#">All pokémons</a>
            <a class="nav__item" href="#">My pokémons</a>
            <a class="nav__item" href="#">Pokémon details</a>
          </nav>
      </header>
      <main class="main">
        <h1 class="main__title">${this.pageTitle}</h1>
      </main>
    `;

    const main = document.querySelector(".main");
    this.pokemonsData.forEach((pokemon) => {
      new PokemonCardComponent(main, pokemon.name, pokemon.img, "", "");
    });
  }
}

export default PageComponent;
