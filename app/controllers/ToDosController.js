export class ToDosController {
  constructor() {
    console.log('ToDo Controller loaded')
  }

  async getToDos() {
    try {

    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async newToDo() {
    try {
      event.preventDefault
      console.log('created new')
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}