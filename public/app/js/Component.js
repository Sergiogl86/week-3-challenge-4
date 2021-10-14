class Component {
  element;
  constructor(parentElement, className, tag = "div") {
    const parentPosition = document.querySelector(parentElement);
    this.element = document.createElement(tag);
    this.element.className = className;
    parentPosition.append(this.element);
  }
}

export default Component;
