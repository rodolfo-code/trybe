import React from 'react'
import { Route, Switch } from 'react-router-dom'
import InputName from './components/InputName'

function Routes() {
  return (
    <Switch>
      <Route path='/' render={InputName}/>
    </Switch>
  )
}

export default Routes
