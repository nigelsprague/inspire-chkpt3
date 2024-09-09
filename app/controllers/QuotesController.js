import { AppState } from "../AppState.js"
import { quotesService } from "../services/QuotesService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class QuotesController {
  constructor() {
    console.log('Quotes Controller loaded')
    AppState.on('user', this.getQuote)
    AppState.on('quote', this.drawQuote)
  }

  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  drawQuote() {
    const quote = AppState.quote
    setHTML('quote', quote.quoteTemplate)
  }
}