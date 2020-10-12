import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { userReducer } from './userReducer'

export const rootReducers = ({ history }) =>
  combineReducers({
    user: userReducer,
    router: connectRouter(history)
  })
