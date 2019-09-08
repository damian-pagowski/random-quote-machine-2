export function _getQuote () {
  return fetch(process.env.REACT_APP_QUOTES_API_URL, {
    headers: { Authorization: process.env.REACT_APP_QUOTES_API_KEY }
  })
    .then(response => response.json())
}
