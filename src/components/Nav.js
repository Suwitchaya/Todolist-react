import React, { Component } from 'react'
import { HomeIcon1 } from './icon'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render () {
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo center">
              <h1>TODO List Application</h1>
            </Link>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
