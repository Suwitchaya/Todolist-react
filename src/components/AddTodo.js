import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import DatePicker from 'react-date-picker'
import { connect } from 'react-redux'
import { ADD_TODOLIST } from '../store/actions/actionTypes'
import '../css/add.css'
import List from './List'
import '../css/list.css'

class AddTodo extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      title: '',
      description: '',
      date: new Date(),
      completed: 0
    }
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    if (this.state.title !== '') {
      this.props.addTodos(this.state)

      this.props.history.push('/')
    }
  }
  _onChange = (date) => {
    this.setState({ date })
  }
  render () {
    return (
      <div className="add-todo">
        <br />
        <h3>Add TODO List</h3>
        <hr />
        <form onSubmit={this.handleSubmit} className="from-input">
          Titel:<input type="text" onChange={this.handleChange} name="title" className="input-add" />
          <br />
          Description:<input type="text" name="description" onChange={this.handleChange} className="input-add" />
          <br />
          <div className="date-div">
            <div className="date-time">
              Date:
              <DatePicker className="input-add date" onChange={this._onChange} value={this.state.date} name="date" />
            </div>
          </div>
          <br />
          <div className="button-add-back">
            <input type="submit" className="btn btn-add" value="SAVE" />
          </div>
        </form>
        <div />
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    todos: state,
    title: state.title
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodos: (payload) => {
      dispatch({ type: ADD_TODOLIST, payload })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
