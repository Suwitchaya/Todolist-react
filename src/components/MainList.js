import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Icon from 'react-icons-kit'
import * as icomoon from 'react-icons-kit/icomoon'

import List from './List'

class ManiList extends Component {
  state = {
    completed: 2,
    open: false,
    data: this.props.dataStore,
    selected: this.props.dataStore,
    chenge: 0
  }
  handleChange = (event) => {
    console.log('handleChange', event.target.value)
    let select = event.target.value
    if (select === 'All') {
      console.log(select)
      this.setState({ selected: this.props.dataStore })
    } else {
      let selected = this.props.dataStore.filter((item) => {
        return item.completed === +select
      })
      console.log('select: ', select)
      this.setState({
        selected: selected,
        chenge: 1
      })
      console.log('selected: ', selected)
      console.log('this.state: ', this.state)
    }
  }

  render () {
    const changeSelect = +this.state.chenge
    console.log('changeSelect: ', changeSelect)

    const styles = {
      background: '#ea9b9b',
      width: '30px',
      height: '30px',
      borderRadius: '50px',
      position: 'relative'
    }

    const styles2 = {
      borderRadius: '50px',
      position: 'absolute',
      top: '5px',
      left: '12px'
    }
    const row = {
      display: 'flex',
      alignItems: 'center'
    }

    return (
      <div>
        <div className="row">
          <div className="form-group col-md-6" style={row}>
            <label>Select list TODO :</label>
            <select className="form-control select" onChange={this.handleChange}>
              <option value="All" selected>
                All
              </option>
              <option value={1}>Completed</option>
              <option value={0}>Incompleted</option>
            </select>

            <div style={styles}>
              <span style={styles2}> {this.state.selected.length} </span>
            </div>
          </div>
          <div className="col-md-6 add-todo-button">
            <Link to="/todo/add">
              <button type="button" className="btn btn-primary ">
                <span className="glyphicon glyphicon-plus-sign" /> Add
              </button>
            </Link>
          </div>
        </div>
        <hr />
        {changeSelect == 1 ? <List data={this.state.selected} /> : <List data={this.props.dataStore} />}
        {/* <List data={this.state.selected} /> */}

        <hr />
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    dataStore: state,
    title: state.title
  }
}

export default connect(mapStateToProps)(ManiList)
