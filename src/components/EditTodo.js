import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { EDIT_TODOLIST } from '../store/actions/actionTypes'
import '../css/add.css'
import List from './List'
import DatePicker from 'react-date-picker'

class EditTodo extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      title: '',
      description: '',
      date: '',
      time: '',
      id: ''
    }
  }
  componentWillMount () {
    this.getTodoList()
  }
  getTodoList () {
    let todoId = this.props.match.params.id
    let list = this.props.todos.find((item) => {
      return item.id === todoId
    })

    this.setState({
      title: list.title,
      description: list.description,
      date: new Date(),
      time: list.time,
      id: todoId
    })
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log('[e.target.name]: e.target.value: ', [ e.target.name ], e.target.value)
  }
  _onChange = (date) => {
    this.setState({ date })
    console.log('date: ', date)
  }
  handleSubmit (e) {
    e.preventDefault()

    this.props.editTodos(this.state)
    console.log('this.props.todos: ', this.props.todos)
    console.log('this.state: ', this.state)
  }
  render () {
    return (
      <div className="add-todo">
        <br />
        <h3>Edit TODO List</h3>
        <hr />
        <form onSubmit={this.handleSubmit} className="from-input">
          Titel:<input
            type="text"
            onChange={this.handleChange}
            name="title"
            className="input-add"
            value={this.state.title}
          />
          <br />
          Description:<input
            type="text"
            name="description"
            onChange={this.handleChange}
            className="input-add"
            value={this.state.description}
          />
          <br />
          <div className="date-div">
            <div className="date-time">
              Date:
              <DatePicker className="input-add date" onChange={this._onChange} value={this.state.date} name="time" />
            </div>
          </div>
          <br />
          <div className="button-add-back">
            <input type="submit" className="btn btn-success" value="SAVE" />
          </div>
        </form>
        <div>
          <hr />
        </div>
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
    editTodos: (payload) => {
      dispatch({ type: EDIT_TODOLIST, payload })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditTodo)
