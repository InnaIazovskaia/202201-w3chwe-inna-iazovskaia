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
          </nav>
      </header>
      <main class="main">
        <div class="main__title_container">
        <h1 class="main__title">${this.pageTitle}</h1>
        </div>
        <div class="pockemonCardsContainer"></div>
      </main>
    `;

    const div = document.querySelector(".pockemonCardsContainer");
    this.pokemonsData.forEach((pokemon) => {
      new PokemonCardComponent(
        div,
        pokemon.name,
        pokemon.id,
        pokemon.img,
        "",
        ""
      );
    });
  }
}

export default PageComponent;
