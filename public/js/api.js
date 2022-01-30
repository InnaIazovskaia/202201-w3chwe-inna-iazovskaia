/* eslint-disable no-use-before-define */
const pokemonsObject = await getPokemonsList();

async function getPokemonsList() {
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon/");

  const pokemonsList = await pokemons.json();

  const pokemonsResults = pokemonsList.results.map((result) =>
    getPokemonData(result.url)
  );

  const pokemonResponses = await Promise.all(pokemonsResults);

  const pokemonData = pokemonResponses.map((pokemonResponse) =>
    getPokemonInformation(pokemonResponse)
  );

  return pokemonData;
}

async function getPokemonData(url) {
  const pokemonPesponse = await fetch(url);

  return pokemonPesponse.json();
}

function getPokemonInformation(pokemonResponse) {
  const pokemons = {
    id: pokemonResponse.id,
    name: pokemonResponse.name,
    img: pokemonResponse.sprites.other.home.front_default,
    type: pokemonResponse.types[0].type.name,
    abilities: pokemonResponse.abilities[0].ability.name,
  };

  return pokemons;
}

export default pokemonsObject;
