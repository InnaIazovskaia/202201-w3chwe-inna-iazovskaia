import ButtonComponent from "../ButtonComponent/ButtonComponent.js";
import Component from "../Component.js";

class PokemonCardComponent extends Component {
  constructor(
    parentElement,
    pokemonName,
    pokemonId,
    srcImgPokemon,
    pokemonType,
    pokemonAbilities
  ) {
    super(parentElement, "pokemonCard", "div");
    this.pokemonName = pokemonName;
    this.pokemonId = pokemonId;
    this.srcImgPokemon = srcImgPokemon;
    this.pokemonType = pokemonType;
    this.pokemonAbilities = pokemonAbilities;

    this.generateHTML();

    this.renderButtonComponent();
  }

  generateHTML() {
    this.element.innerHTML = `
    <h2 class="pokemonCard__header">${this.pokemonName} id: #${this.pokemonId}</h2>
    <img class="pokemonCard__img" src="${this.srcImgPokemon}" alt="image of pokémon ${this.pokemonName}" />
    <p class="pokemonCard__information">type: ${this.pokemonType}</p>
    <p class="pokemonCard__information">abilities: ${this.pokemonAbilities}</p>
    `;
  }

  renderButtonComponent() {
    new ButtonComponent(
      this.element,
      "pokemonCard__button",
      "Add to favorites"
    );
  }
}

export default PokemonCardComponent;
