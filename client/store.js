import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createLogger } from 'redux-logger'

import TodoReducer from './todo/TodoReducer'

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
})

const store = createStore(TodoReducer, composeWithDevTools(
  applyMiddleware(
    logger,
  ),
))

export default store