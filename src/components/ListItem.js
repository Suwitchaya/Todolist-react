import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import Icon from 'react-icons-kit'
import * as icomoon from 'react-icons-kit/icomoon'

import { DELETE_TODOLIST, CHENGE_COMPLETED } from '../store/actions/actionTypes'
import '../css/checkbok.css'
import '../css/list.css'
const mapStateToProps = (state, ownProps) => {
  return {
    todos: state,
    title: state.title
  }
}

const mapDispatchToProps = (dispatch) => {
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
  }

  _Chacked = (e) => {
    let check = this.props.todos.find((item) => {
      return item.id === e.target.value
    })

    // this.setState({
    //   id: check.id,
    //   completed: 1
    // })

    this.props.checkedTodoList({
      id: check.id,
      completed: 1
    })
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
            <div className="list-title">{this.props.item.title}</div>
            <div className="list-detail">
              <span className="list-des">{this.props.item.description}</span>
              <span className="list-date">
                <Moment format="DD/MM/YYYY">{this.props.item.date}</Moment>
              </span>
            </div>
          </li>
        </div>
        <div className="col-md-2">
          <Link className="btn btn-edit button-list" to={`/todo/edit/${this.props.item.id}`}>
            <Icon className="icon-list" icon={icomoon.pencil} />
          </Link>
          <button onClick={this.deleteList} id={this.props.item.id} className="btn btn-delete">
            <Icon className="icon-list" icon={icomoon.bin} />
          </button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
