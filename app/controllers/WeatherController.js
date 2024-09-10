import { AppState } from "../AppState.js"
import { weatherService } from "../services/WeatherService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


export class WeatherController {
  constructor() {
    AppState.on('user', this.getWeather)
    AppState.on('weather', this.weatherDisplayF)
    console.log('Weather Controller loaded')
  }

  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  weatherDisplayF() {
    const weather = AppState.weather
    setHTML('weather', weather.weatherTemplateF)
  }

  weatherDisplayC() {
    const weather = AppState.weather
    setHTML('weather', weather.weatherTemplateC)
  }
}