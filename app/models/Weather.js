export class Weather {
  constructor(data) {
    this.name = data.name
    this.temp = data.main.temp
    this.weather = data.weather[0].description
  }

  get weatherTemplate() {
    return `<span>${this.temp}</span>
      <span>${this.weather}</span>`
  }

  get tempUnit() {

  }
}