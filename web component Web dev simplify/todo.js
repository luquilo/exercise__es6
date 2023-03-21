const template = document.createElement('template');
template.innerHTML = 

class TodoItem extends HTMLElement {
  constructor(){
    super()
    const shadow = this.attachShadow({mode: "open"})
    shadow.innerHTML = 'hi iam custom componenttttt'
  }  
}


// register this with the dom
// naming the component
customElements.define('todo-item', TodoItem)  