import { ToDo } from './models/ToDo.js'
import { Weather } from './models/Weather.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
ToDo

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /** @type {Weather} */
  weather = null

  quote = []

  image = null

  /**@type {ToDo[]} */
  todos = []
}

export const AppState = createObservableProxy(new ObservableAppState())