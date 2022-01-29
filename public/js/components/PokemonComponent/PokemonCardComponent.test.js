import PokemonCardComponent from "./PokemonCardComponent.js";

describe("Given a PokemonCardComponent", () => {
  describe("When it's rended", () => {
    test("Then it should render a h2", () => {
      const container = document.createElement("section");

      new PokemonCardComponent(container, "");

      expect(container.querySelector("h2")).not.toBeNull();
    });
  });

  describe("When it's instantiateding with 'bulbasaur'", () => {
    test("Then it's should display 'bulbasaur'", () => {
      const container = document.createElement("section");
      const pokemonName = "bulbasaur";

      new PokemonCardComponent(container, "bulbasaur");

      expect(container.textContent).toMatch(pokemonName);
    });
  });
});
