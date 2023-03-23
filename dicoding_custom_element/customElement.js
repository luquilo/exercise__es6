class ImageFigure extends HTMLElement {
  // constructor() {
  //   super();
  //   console.log("constructed!");
  // }

  connectedCallback() {
    this.src = this.getAttribute("src") || null
    this.alt = this.getAttribute("alt") || null
    this.caption = this.getAttribute('caption') || null
    this.class = this.getAttribute('class') || null
    this.render()
  }

  render() {
    this.innerHTML = `
        <figure class='${this.class}'>
          <img src='${this.src}' alt='${this.alt}'>
          <figcaption>${this.caption}</figcaption>
        </figure>
    `
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render()
  }

  static get observedAttributes() {
    return ["caption"];
  }
}

// custom elements merupakan object global yang digunakan untuk
// => mendefinisikan custom element dan memberi tahu bahwa ada html tag baru
customElements.define("image-figure", ImageFigure);
