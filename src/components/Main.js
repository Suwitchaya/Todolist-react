import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AddTodo from './AddTodo'
import MainList from './MainList'
import EditTodo from './EditTodo'
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={MainList} />
      <Route exact path="/add" component={AddTodo} />
      <Route exact path="/edit/:id" component={EditTodo} />
    </Switch>
  </main>
)

export default Main
