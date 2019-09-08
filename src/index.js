import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import combineReducers from './reducers/index'

import applyMiddleware from './middleware/main' 
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(combineReducers, applyMiddleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

