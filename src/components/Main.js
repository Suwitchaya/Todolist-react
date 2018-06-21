import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AddTodo from './AddTodo'
import MainList from './MainList'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={MainList} />
      <Route exact path="/add" component={AddTodo} />
    </Switch>
  </main>
)

export default Main
