import React from 'react'
// import Checkbox from '@material-ui/core/Checkbox'
import { connect } from 'react-redux'

const deleteContact = (e) => {
  e.preventDefault()
  // this.props.deleteContact(index)
}
const ListItem = (props) => {
  return (
    <div className="row">
      <div>
        <input type="checkbox" value="" />
      </div>
      <div className="col-md-6">
        <li className="list-group-item clearfix" key={props.item.id}>
          <h2>{props.item.title}</h2>
          <h3>{props.item.description}</h3>
          <p>{props.item.date}</p>
        </li>
      </div>
      <div className="col-md-2">
        <button onClick={(e) => this.deleteContact(e, props.item.id)} className="btn btn-info">
          Edit
        </button>
      </div>
      <div className="col-md-2">
        <button onClick={(e) => this.deleteContact(e, props.item.id)} className="btn btn-danger">
          Remove
        </button>
      </div>
    </div>
  )
}
export default ListItem
