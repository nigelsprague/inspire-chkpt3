export class Quotes {
  constructor(data) {
    this.body = data.content
    this.author = data.author
    this.tags = data.tags
    this.description = data.description
  }

  get quoteTemplate() {
    return `<h4>"${this.body}"</h4>
      <p class="offset-5 author-text">― ${this.author}</p>`
  }
}