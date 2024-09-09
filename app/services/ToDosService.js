import { AppState } from "../AppState.js"
import { ToDo } from "../models/ToDo.js"
import { api } from "./AxiosService.js"

class ToDosService {
  async getToDos() {
    const response = await api.get('api/todos')
    console.log(response.data)
  }

  async newToDo(toDoFormData) {
    const response = await api.post('api/todos', toDoFormData)
    console.log(response.data)

    const newDo = new ToDo(response.data)
    AppState.todos.push(newDo)
  }
}

export const toDosService = new ToDosService()