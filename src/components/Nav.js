import React, { Component } from 'react'

class Navbar extends Component {
  render () {
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">
              Todo List
            </a>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
