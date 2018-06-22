import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../css/add.css'

class Navbar extends Component {
  render () {
    return (
      <nav className="add-todo">
        <div className="nav-wrapper nav-bar">
          <Link to="/" className="brand-logo center">
            <h1>TODO List Application</h1>
          </Link>
        </div>
      </nav>
    )
  }
}

export default Navbar
