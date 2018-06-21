import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { EDIT_TODOLIST } from '../store/actions/actionTypes'
import List from './List'

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
      id:''
    }
  }
  componentWillMount (){
      this.getTodoList();
  }
  getTodoList(){
    let todoId = this.props.match.params.id;
    let list = this.props.todos.find((item) => {
        return item.id === (+todoId)
      })

      this.setState({
          title:list.title,
          description:list.description,
          date:list.date,
          time:list.time,
          id: (+todoId)
      })
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log('[e.target.name]: e.target.value: ', [ e.target.name ], e.target.value)
  }

  handleSubmit (e) {
    e.preventDefault()

    this.props.editTodos(this.state)
    console.log('this.props.todos: ', this.props.todos)
    console.log('this.state: ', this.state)
  }
  render () {
    return (
      <div>
        <br />
        <h3>Add TODO List</h3>
        <form onSubmit={this.handleSubmit}>
          Titel:<input
            type="text"
            onChange={this.handleChange}
            name="title"
            className="form-control"
            value={this.state.title}
          />
          <br />
          Description:<input
            type="text"
            name="description"
            onChange={this.handleChange}
            className="form-control"
            value={this.state.description}
          />
          <br />
          Date:<input
            type="text"
            onChange={this.handleChange}
            name="date"
            className="form-control"
            value={this.state.date}
          />
          <br />
         <div className="button-add-back"> <Link className="btn btn-warning" to="/">
          BACK
        </Link>
          <input type="submit" className="btn btn-success" value="SAVE" />
          </div>
        </form>
        <div>

          <hr />
          {<List data={this.props.todos} />}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    todos:  state ,
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
