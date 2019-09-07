import React from 'react'
import './App.css'

function App () {
  return (
    <div className='App'>
      <div class='section'>
        <div id='quote-box'>
          <h1>Quote Of The Day</h1>

          <p class='lead'>
            <i class='fa fa-quote-left' /> <span id="text">Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Commodi, quis! </span>
          </p>

          <div class='quote-author' id="author">- Steve Jobs</div>
          <div class='social-media'>
            <a id="" href='#' class='fa fa-facebook' />
            <a id="tweet-quote" href='twitter.com/intent/tweet' class='fa fa-twitter' />
          </div>
          <button id="new-quote" type='button' class='btn btn-outline-dark text-light'>
            Get Another
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
