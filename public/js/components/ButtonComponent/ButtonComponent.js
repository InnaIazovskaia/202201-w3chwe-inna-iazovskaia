import Component from "../Component.js";

class ButtonComponent extends Component {
  constructor(parentElement, className, text, value, actionOnClick) {
    super(parentElement, className, "button");

    this.generateHTML(text, value);

    this.addListeners(actionOnClick);
  }

  generateHTML(text, value) {
    this.element.textContent = text;
    this.element.value = value;
  }

  addListeners(actionOnClick) {
    this.element.addEventListener("click", actionOnClick);
  }
}

export default ButtonComponent;
