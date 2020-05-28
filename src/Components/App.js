import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from "../Pages/Login"
import Chat from "../Pages/Chat"
import NotFound from './NotFound'

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/chat' component={Chat} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
export default App
