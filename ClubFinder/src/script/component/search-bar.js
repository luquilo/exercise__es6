class SearchBar extends HTMLElement {
  connectedCallback(){
    this.render()
  }

  // setter accessor
  set clickEvent(event){
    this._clickEvent = event // sebagai event handler pada element button
    this.render()
  }

  get value(){
    // mendapatkan value dari search input
    return this.querySelector('#searchElement').value
  }

  render(){
    this.innerHTML = 
    `
    <div id="search-container" class="search-container">
      <input placeholder="Search football club" id="searchElement" type="search">
      <button id="searchButtonElement" type="submit">Search</button>
    </div>
    `

    // memberi fungsi listener click pada button yang memiliki id 'searchButtonElement'
    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent)
  }
}

customElements.define('search-bar', SearchBar)