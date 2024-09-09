export class Weather {
  constructor(data) {
    this.name = data.name
    this.temp = data.main.temp
    this.weather = data.weather.description
  }
}