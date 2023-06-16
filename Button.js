class Button {
  constructor(text, styles) {
    this.text = text;
    this.styles = styles;
    this.element = document.createElement('button');
    this.element.textContent = this.text;
    this.element.classList.add('button');
    this.element.addEventListener('click', this.onclick.bind(this));
    this.applyStyles();
  }

  onclick() {
    console.log('Button clicked!');
  }

  applyStyles() {
    for (const [key, value] of Object.entries(this.styles)) {
      this.element.style[key] = value;
    }
  }

  render() {
    return this.element;
  }
}

const buttonStyles = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer'
};

const button = new Button('Click me', buttonStyles);
document.body.appendChild(button.render());