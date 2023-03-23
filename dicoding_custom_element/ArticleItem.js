

const article = {
    id: 1,
    title: 'Lorem Ipsum Dolor',
    featuredImage: 'https://picsum.photos/id/204/536/354?grayscale',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  };
  
  
  const containerElement = document.querySelector('.container')
  class ArticleItem extends HTMLElement {
    set article(article){
      this._article = article;
      this.render()
    }
    
    render(){
      this.innerHTML = `
      <img class='featured-image' src='${this._article.featuredImage}' alt='${this._article.title}'>
      <div class='article-info'>
        <h2><a href='${this._article.id}'>${this._article.title}</a></h2>
        <p>${this._article.description}</p>
      </div>
      `
    }
  
  
  }
  
  customElements.define('article-item', ArticleItem)
  const articleItemElement = document.createElement('article-item')
  articleItemElement.article = article
  
  containerElement.appendChild(articleItemElement)