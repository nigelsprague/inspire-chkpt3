export class ToDo {
  constructor(data) {
    this.id = data.id || ''
    this.completed = data.completed || false
    this.description = data.description
  }

  get toDoTemplate() {
    return `<span><input onchange="app.ToDosController.checkComplete('${this.id}')" type="checkbox" ${this.completed ? 'checked' : ''}> ${this.description}</span>`
  }
}