import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import App from './Components/App'
import './styles/app.css'

const initialState = {
  user: {}
}

const store = createStore(reducer, initialState);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)