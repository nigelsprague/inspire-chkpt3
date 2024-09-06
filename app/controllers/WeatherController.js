import { Pop } from "../utils/Pop.js"

export class WeatherController {
  constructor() {
    console.log('Weather Controller loaded')
  }

  async getWeather() {
    try {

    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}