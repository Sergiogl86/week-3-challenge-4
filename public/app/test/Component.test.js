import Component from "../js/Component.js";
describe("When given a Component constructor", () => {
  describe("when it recieves a parentElement `body`, an html tag `div`and a className `firstson`", () => {
    test("then it should render a div element with class`firstson`, inside de section container", () => {
      const parentElement = "body";
      const tag = "div";
      const className = "firstson";

      const elementToCreate = new Component(parentElement, className, tag);

      const elementCreated = document.querySelector("div.firstson");

      expect(elementCreated).not.toBeNull();
    });
  });
});
