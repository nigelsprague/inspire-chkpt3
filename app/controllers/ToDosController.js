import { AppState } from "../AppState.js"
import { toDosService } from "../services/ToDosService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class ToDosController {
  constructor() {
    console.log('ToDo Controller loaded')
    AppState.on('todos', this.getToDos)
  }

  async getToDos() {
    try {
      await toDosService.getToDos()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  drawToDos() {
    const todos = AppState.todos
    let todoHTML = ''
    todos.forEach(() => todoHTML += `<span><input onchange="app.ToDosController.checkComplete('${this.id}')" type="checkbox" ${this.completed ? 'checked' : ''}> ${this.desc}</span>`)
  }

  async newToDo() {
    try {
      event.preventDefault()
      const toDoForm = event.target
      const toDoFormData = getFormData(toDoForm)
      await toDosService.newToDo(toDoFormData)
      console.log('created new')
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}