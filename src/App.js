import React, { Component } from 'react'
import Main from './components/Main'
import { Link } from 'react-router-dom'
import Nav from './components/Nav'
import Select from './components/Select'
import List from './components/List'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    return (
      <div className="container">
        <h1>TODO List Application</h1>
        <Nav />
        <Main />
        <hr />
        <Select data="xx" />
        <hr />
        {<List data={this.props.todos} />}
        <div className="fixed-action-btn">
          <Link to="/add">
            <i className="fa fa-plus" /> Add Meetup
          </Link>
        </div>
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
