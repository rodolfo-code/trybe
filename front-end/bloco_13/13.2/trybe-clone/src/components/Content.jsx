import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Doze1 from '../pages/subPages/Doze1';
import Calendar from '../pages/Calendar';
import LiveLectures from '../pages/LiveLectures';
import Solutions from '../pages/Solutions';
import TrybeTalks from '../pages/TrybeTalks';
import Doze2 from '../pages/subPages/Doze2';

class Content extends Component {
  constructor(props) {
    super(props)
  
    // this.solutions12 = ['12.1', '12.2'];
    // this.solutions13 = ['13.1', '13.2'];

    this.availableSolutions = [
      ['12.1', '12.2'],
      ['13.1', '13.2']
    ]
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
              <Solutions {...props} availableSolutions={ this.availableSolutions } />
              )} 
              />
          <Route path='/solutions/12.1' component={ Doze1 } />
          <Route path='/solutions/12.2' component={ Doze2 } />
        </Switch>
      </main>
    )
  }
}

export default Content;