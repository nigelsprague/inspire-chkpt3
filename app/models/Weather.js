export class Weather {
  constructor(data) {
    this.name = data.name
    this.tempF = (data.main.temp - 273.15) * 1.8 + 32
    this.tempC = data.main.temp - 273.15
    this.weather = data.weather[0].description
  }

  get weatherTemplateF() {
    return `<span role="button" onclick="app.WeatherController.weatherDisplayC()">${this.tempF.toFixed(1) + " F"}</span>
    <span>${this.weather}</span>`
  }

  get weatherTemplateC() {
    return `<span role="button" onclick="app.WeatherController.weatherDisplayF()">${this.tempC.toFixed(1) + ' C'}</span >
  <span>${this.weather}</span>`
  }
}