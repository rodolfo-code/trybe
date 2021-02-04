import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

class Content extends Component {
  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route path='calendar'/>
            <Route path='live-lectures'/>
            <Route path='trybe-talks'/>
            <Route path='solutions' />
          </Switch>
        </main>
      </div>
    )
  }
}

export default Content;