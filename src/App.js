import React, { Component } from 'react'
import { connect } from 'react-redux'

import './App.css'
import Main from './components/Main'
import Nav from './components/Nav'

class App extends Component {
  render () {
    return (
      <div className="container">
        <h1>TODO List Application</h1>
        <Nav />
        <Main />
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    todos: [ state ],
    title: state.title
  }
}
export default connect(mapStateToProps)(App)
