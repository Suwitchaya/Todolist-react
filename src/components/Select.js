import React from 'react'

const Select = (props) => {
  return (
    <div class="form-group">
      <label for="sel1">Select list TODO (select one):</label>
      <select class="form-control" id="sel1">
        <option>All</option>
        <option>Completed</option>
        <option>Incompleted</option>
      </select>
    </div>
  )
}

export default Select
