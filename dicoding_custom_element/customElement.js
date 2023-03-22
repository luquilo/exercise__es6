class ImageFigure extends HTMLElement {
  constructor() {
    super();
    console.log("constructed!");
  }

  connectedCallback() {
    this.src = this.getAttribute("src") || null
    this.alt = this.getAttribute("alt") || null
    this.caption = this.getAttribute('caption') || null

    this.innerHTML = `
        <figure>
          <img src='${this.src}' alt='${this.alt}'>
          <figcaption>${this.caption}</figcaption>
        </figure>
    `

  }

  disconnectedCallback() {
    console.log("disconnected!");
  }

  adoptepCallback() {
    console.log("adoptep!");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute: ${name} changed!`);
  }

  static get observedAttribute() {
    return ["caption"];
  }
}

// custom elements merupakan object global yang digunakan untuk
// => mendefinisikan custom element dan memberi tahu bahwa ada html tag baru
customElements.define("image-figure", ImageFigure);
