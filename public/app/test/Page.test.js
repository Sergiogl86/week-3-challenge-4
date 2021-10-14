import Page from "../js/Page.js";

describe("When given a Page class", () => {
  describe("when it recieves a parentElement `section`, an html tag `div`and a className `firstson`", () => {
    test("then it should render a div element with class`firstson`, inside de section container", () => {
      const container = document.createElement("body");

      const tag = "div";
      const className = "firstson";

      const elementToCreate = new Page(container, tag);

      const elementCreated = container.querySelector("div");

      expect(elementCreated).not.toBeNull();
    });
  });
});
