import { ToDo } from './models/ToDo.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
ToDo

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  weather = []

  quote = []

  image = null

  /**@type {ToDo[]} */
  todos = []
}

export const AppState = createObservableProxy(new ObservableAppState())