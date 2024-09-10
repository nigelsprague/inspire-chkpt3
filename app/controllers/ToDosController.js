import { AppState } from "../AppState.js"
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
    const toDo = AppState.todos
    let toDoHTML = ''
    toDo.forEach(todo => toDoHTML += todo.toDoTemplate)
    setHTML('toDoList', toDoHTML)

    const completedToDos = toDo.filter(todo => todo.completed)
    setText('todo-count', `${toDo.length - completedToDos.length}`)
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

  async checkComplete(todoId) {
    try {
      await toDosService.checkComplete(todoId)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async deleteToDo(todoId) {
    try {
      const wantsToDelete = await Pop.confirm('Are you sure you want to delete this ToDo?')
      if (!wantsToDelete) return
      await toDosService.deleteToDo(todoId)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}