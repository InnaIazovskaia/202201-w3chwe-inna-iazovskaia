import Component from "../Component.js";

class PokemonCardComponent extends Component {
  constructor(
    parentElement,
    pokemonName,
    srcImgPokemon,
    pokemonType,
    pokemonAbilities
  ) {
    super(parentElement, "pokemonCard", "div");
    this.pokemonName = pokemonName;
    this.srcImgPokemon = srcImgPokemon;
    this.pokemonType = pokemonType;
    this.pokemonAbilities = pokemonAbilities;

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
    <h2 class="pokemonCard__header">${this.pokemonName}</h2>
    <img class="pokemonCard__img" src="${this.srcImgPokemon}" alt="image of pokémon ${this.pokemonName}" />
    <p class="pokemonCard__information">type: ${this.pokemonType}</p>
    <p class="pokemonCard__information">abilities: ${this.pokemonAbilities}</p>
    `;
  }
}

export default PokemonCardComponent;
