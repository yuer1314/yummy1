import { combineReducers } from 'redux'
import accountReducer from './accountReducer'
import appReducer from './appReducer'

const rootReducer = combineReducers({
  account: accountReducer,
  app: appReducer
})

export default rootReducer