import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Calendar from '../pages/Calendar';
import LiveLectures from '../pages/LiveLectures';
import Solutions from '../pages/Solutions';
import TrybeTalks from '../pages/TrybeTalks';

class Content extends Component {
  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route path='/calendar'component={ Calendar }/>
            <Route path='/live-lectures' component={ LiveLectures }/>
            <Route path='/trybe-talks' component={ TrybeTalks } />
            <Route path='/solutions' component={ Solutions } />
          </Switch>
        </main>
      </div>
    )
  }
}

export default Content;