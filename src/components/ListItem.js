import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Moment from 'react-moment'

import { DELETE_TODOLIST, CHENGE_COMPLETED } from '../store/actions/actionTypes'
import '../css/checkbok.css'
const mapStateToProps = (state, ownProps) => {
  return {
    todos: state,
    title: state.title
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('dispatch: ', dispatch)
  return {
    deleteTodoList: (payload) => {
      dispatch({ type: DELETE_TODOLIST, payload })
    },
    checkedTodoList: (payload) => {
      dispatch({ type: CHENGE_COMPLETED, payload })
    }
  }
}

class ListItem extends React.Component {
  constructor (props) {
    super(props)
    this._Chacked = this._Chacked.bind(this)
    this.state = {
      id: '',
      completed: 0
    }
  }
  deleteList = (e) => {
    e.preventDefault()
    this.props.deleteTodoList(e.target.id)
    console.log('e.target.id: ', e.target.id)
  }

  _Chacked = (e) => {
    console.log('_Chacked', e.target.value)
    let check = this.props.todos.find((item) => {
      return item.id === e.target.value
    })
    console.log('check: ', check)
    // this.setState({
    //   id: check.id,
    //   completed: 1
    // })
    console.log('check.id: ', check.id)
    this.props.checkedTodoList({
      id: check.id,
      completed: 1
    })
    console.log('this.state: ', this.state)
  }
  render () {
    const checkCompleted = this.props.item.completed
    return (
      <div className="row list-todo">
        <div>
          {checkCompleted == 0 ? (
            <input type="checkbox" value={this.props.item.id} onClick={this._Chacked} />
          ) : (
            <input type="checkbox" checked />
          )}
        </div>
        <div className="col-md-8">
          <li className="list-group-item clearfix" key={this.props.item.id}>
            <h2>{this.props.item.title}</h2> <br />
            <p>{this.props.item.description}</p> <br />
            <Moment format="DD/MM/YYYY">{this.props.item.date}</Moment>
          </li>
        </div>
        <div className="col-md-2">
          <Link className="btn btn-info" to={`/todo/edit/${this.props.item.id}`}>
            Edit
          </Link>
          <button onClick={this.deleteList} id={this.props.item.id} className="btn btn-danger">
            Remove
          </button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
