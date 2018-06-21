import React from 'react'
// import Checkbox from '@material-ui/core/Checkbox'
import { connect } from 'react-redux'
import { DELETE_TODOLIST } from '../store/actions/actionTypes'
const mapStateToProps = (state, ownProps) => {
  return {
    todos: [ state ],
    title: state.title
  }
}
const mapDispatchToProps = (dispatch) => {
  console.log('dispatch: ', dispatch)
  return {
    deleteTodoList: (payload) => {
      dispatch({ type: DELETE_TODOLIST, payload })
    }
  }
}
class ListItem extends React.Component {
  deleteList = (e) => {
    e.preventDefault()
    this.props.deleteTodoList(+e.target.id)
    console.log('e.target.id: ', e.target.id)
  }

  render () {
    return (
      <div className="row list-todo">
        <div>
          <input type="checkbox" value="" />
        </div>
        <div className="col-md-8">
          <li className="list-group-item clearfix" key={this.props.item.id}>
            <h2>{this.props.item.title}</h2> <br />
            <p>{this.props.item.description}</p> <br />
            <p>{this.props.item.date}</p>
          </li>
        </div>
        <div className="col-md-2">
          <button onClick={(e) => this.deleteContact(e, this.props.item.id)} className="btn btn-info">
            Edit
          </button>
          <button onClick={this.deleteList} id={this.props.item.id} className="btn btn-danger">
            Remove
          </button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
