import { showLoading, hideLoading } from 'react-redux-loading'
import { _getQuote } from '../utils/api'

export const GET_QUOTE = 'GET_QUOTE'

function getQuote (quote) {
  return {
    type: GET_QUOTE,
    quote
  }
}

export default function handleGetQuote () {
  return dispatch => {
    dispatch(showLoading())
    return _getQuote()
      .then(quote => dispatch(getQuote(quote)))
      .then(() => dispatch(hideLoading()))
  }
}
