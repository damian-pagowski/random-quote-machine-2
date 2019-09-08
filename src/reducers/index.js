import { combineReducers } from 'redux'
import quotes from './quotes'

import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  quotes,
  loadingBar: loadingBarReducer
})
