import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import List from './List'

class ManiList extends Component {
  state = {
    completed: 2,
    open: false,
    data: this.props.dataStore,
    selected: this.props.dataStore
  }
  handleChange = (event) => {
    console.log('handleChange', event.target.value)
    let select = event.target.value
    if (select === 'All') {
      console.log(select)
      this.setState({ selected: this.props.dataStore })
    } else {
      let selected = this.props.dataStore.filter((item) => {
        return item.completed === parseInt(select)
      })
      console.log('select: ', select)
      this.setState({ selected: selected })
      console.log('selected: ', selected)
    }
  }

  render () {
    return (
      <div>
        <div className="row">
          <div className="form-group col-md-6">
            <label>Select list TODO :</label>
            <select className="form-control select" onChange={this.handleChange}>
              <option value="All" selected>
                All
              </option>
              <option value={1}>Completed</option>
              <option value={0}>Incompleted</option>
            </select>
          </div>
          <div className="col-md-6 add-todo-button">
            <Link to="/add">
              <button type="button" className="btn btn-primary ">
                <span className="glyphicon glyphicon-plus-sign" /> Add
              </button>
            </Link>
          </div>
        </div>
        <hr />
        <List data={this.state.selected} />
        <hr />
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    dataStore: [ state ],
    title: state.title
  }
}

export default connect(mapStateToProps)(ManiList)
