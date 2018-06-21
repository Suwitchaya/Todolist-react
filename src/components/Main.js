import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import Meetups from './Meetups'
// import About from './About'
// import MeetupDetails from './MeetupDetails'
import AddTodo from './AddTodo'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/add" component={AddTodo} />
    </Switch>
  </main>
)

export default Main
