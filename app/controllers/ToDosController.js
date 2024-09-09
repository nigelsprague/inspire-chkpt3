import { AppState } from "../AppState.js"
import { ToDo } from "../models/ToDo.js"
import { toDosService } from "../services/ToDosService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML, setText } from "../utils/Writer.js"

export class ToDosController {
  constructor() {
    console.log('ToDo Controller loaded')
    AppState.on('user', this.getToDos)
    AppState.on('todos', this.drawToDos)
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
    let toDoHTML = ''
    todos.forEach(todo => toDoHTML += todo.toDoTemplate)
    console.log(toDoHTML)
    setHTML('toDoList', toDoHTML)
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