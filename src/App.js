import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import Main from './components/Main'
import Nav from './components/Nav'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <hr />
          <Main />
        </div>
      </BrowserRouter>
    )
  }
}
export default App
