import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import logger from 'redux-logger'
import { rootReducers } from './reducers'
import { rootSagas } from './sagas'

const sagaMiddleware = createSagaMiddleware()
export const history = createBrowserHistory()
export const store = createStore(
  rootReducers({ history }),
  applyMiddleware(sagaMiddleware, routerMiddleware(history), logger)
)
sagaMiddleware.run(rootSagas)
