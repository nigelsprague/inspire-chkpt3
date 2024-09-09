import { AppState } from "../AppState.js"
import { setHTML, setText } from "../utils/Writer.js"

export class ClockController {
  constructor() {
    AppState.on('user', this.clockDisplay)
    setInterval(this.clockDisplay, 1000)
  }
  clockDisplay() {
    let clock = new Date().toLocaleTimeString()
    setText('clock', clock)
  }

}