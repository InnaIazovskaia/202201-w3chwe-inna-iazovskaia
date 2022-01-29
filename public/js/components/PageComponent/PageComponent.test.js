import PageComponent from "./PageComponent.js";

describe("Given a PageComponent", () => {
  describe("When it's rended", () => {
    test("Then it should render a nav", () => {
      const container = document.createElement("section");

      new PageComponent(container, "");

      expect(container.querySelector("nav")).not.toBeNull();
    });
  });

  describe("When it's instantiateding with 'Title'", () => {
    test("Then it's should display 'Title'", () => {
      const container = document.createElement("section");
      const title = "Title";

      new PageComponent(container, "Title");

      expect(container.textContent).toMatch(title);
    });
  });
});
