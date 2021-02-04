import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Doze1 from '../pages/subPages/Doze1';
import Calendar from '../pages/Calendar';
import LiveLectures from '../pages/LiveLectures';
import Solutions from '../pages/Solutions';
import TrybeTalks from '../pages/TrybeTalks';

class Content extends Component {
  constructor(props) {
    super(props)
  
    this.solutions = ['12.1', '12.2', '13.1', '13.2'];
  }
  
  render() {
    return (
      <main>
        <Switch>
          <Route path='/calendar'component={ Calendar }/>
          <Route path='/live-lectures' component={ LiveLectures }/>
          <Route path='/trybe-talks' component={ TrybeTalks } />
          <Route
            exact
            path='/solutions'
            render={ (props) => (
              <Solutions {...props} availableSolutions={ this.solutions } />
              )} 
              />
          <Route path='/solutions/12.1' component={ Doze1 } />
        </Switch>
      </main>
    )
  }
}

export default Content;