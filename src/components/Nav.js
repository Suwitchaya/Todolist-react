import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

class Navbar extends Component {
  render () {
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">
              Todo List
            </a>
            <a data-activates="main-menu" className="button-collapse show-on-large">
              <i className="fa fa-bars" />
            </a>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
