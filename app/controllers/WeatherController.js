import { AppState } from "../AppState.js"
import { weatherService } from "../services/WeatherService.js"
import { Pop } from "../utils/Pop.js"

export class WeatherController {
  constructor() {
    AppState.on('user', this.getWeather)
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
}