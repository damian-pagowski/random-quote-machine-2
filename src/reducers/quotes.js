// import GET_QUOTE from '../actions/quotes'
// import GET_QUOTE from '../actions/quotes'
export default function quotes (state = {}, action) {
  switch (action.type) {
    case "GET_QUOTE":
      return {
        ...state,
        ...action.quote
      }
    default:
      return state
  }
}
