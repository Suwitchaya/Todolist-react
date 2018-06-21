import React from 'react'
import ListItem from './ListItem'

const ListTodo = (props) => {
  const item = props.data.map((item) => {
    return <ListItem key={item.id} item={item} />
  })
  return <ui className="list-group">{item}</ui>
}

export default ListTodo
