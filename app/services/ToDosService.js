import { AppState } from "../AppState.js"
import { ToDo } from "../models/ToDo.js"
import { api } from "./AxiosService.js"

class ToDosService {
  async getToDos() {
    const response = await api.get('api/todos')
    //TODO finish this out, we retrieved the data, but what do we do with it?
    const todos = response.data.map(todoData => new ToDo(todoData))
    AppState.todos = todos
  }

  async newToDo(toDoFormData) {
    const response = await api.post('api/todos', toDoFormData)

    const newDo = new ToDo(response.data)
    AppState.todos.push(newDo)
  }

  async checkComplete(todoId) {
    const todos = AppState.todos
    const todoIndex = todos.findIndex(todo => todoId == todo.id)
    const todo = todos[todoIndex]
    const todoData = { completed: !todo.completed }
    const response = await api.put(`api/todos/${todoId}`, todoData)
    const updatedTodo = new ToDo(response.data)
    todos.splice(todoIndex, 1, updatedTodo)
  }

  async deleteToDo(todoId) {
    const response = await api.delete(`api/todos/${todoId}`)
    const todoIndex = AppState.todos.findIndex(todo => todo.id == todoId)
    AppState.todos.splice(todoIndex, 1)
  }
}

export const toDosService = new ToDosService()