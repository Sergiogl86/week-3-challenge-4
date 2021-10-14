class Component {
  element;
  constructor(parentElement, className, tag = "div") {
    debugger;
    const parentPosition = document.querySelector(parentElement);
    this.element = document.createElement(tag);
    this.element.className = className;
    parentPosition.append(this.element);
  }
}

export default Component;
