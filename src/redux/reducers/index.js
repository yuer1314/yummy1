import { combineReducers } from 'redux'
import account from './accountReducer'
import dish from './dishReducer'
import app from './appReducer'
import cart from './cartReducer'

const rootReducer = combineReducers({
  account,
  app,
  dish,
  cart
})

export default rootReducer