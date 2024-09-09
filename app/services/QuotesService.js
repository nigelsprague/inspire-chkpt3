import { AppState } from "../AppState.js"
import { Quotes } from "../models/Quotes.js"
import { api } from "./AxiosService.js"

class QuotesService {
  async getQuote() {
    const response = await api.get('api/quotes')
    const newQuote = new Quotes(response.data)
    AppState.quote = newQuote
  }
}

export const quotesService = new QuotesService()