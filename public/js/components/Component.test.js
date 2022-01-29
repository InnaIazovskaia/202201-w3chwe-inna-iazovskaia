import Component from "./Component.js";

describe("Given a Component", () => {
  describe("When it's rended", () => {
    test("Then it should render a h2", () => {
      const container = document.createElement("section");

      new Component(container, "", "h2");

      expect(container.querySelector("h2")).not.toBeNull();
    });
  });
});
