import { AppState } from "../AppState.js"
import { ToDo } from "../models/ToDos.js"
import { api } from "./AxiosService.js"

class ToDosService {
  async getToDos() {
    const response = await api.get('api/todos')
    console.log(response.data)
  }

  async newToDo(toDoFormData) {
    const response = await api.post('api/todos', toDoFormData)
    console.log(response.data)
  }
}

export const toDosService = new ToDosService()