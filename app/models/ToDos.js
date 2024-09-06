export class ToDo {
  constructor(data) {
    this.id = data.id
    this.completed = false
    this.creatorId = data.creatorId
    this.description = data.description
  }
}