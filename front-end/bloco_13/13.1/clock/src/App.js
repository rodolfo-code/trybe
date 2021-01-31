import './App.css';
import Clock from './components/Clock';
import Button from '@material-ui/core/Button'

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super();
  
    this.turnOffButton = this.turnOffButton.bind(this)
    
    this.state = {
       showTime: true,
    };
  }

  turnOffButton() {
    const { showTime } = this.state
    this.setState({
      showTime: !showTime,
    })
  }  

  render() {
    const { showTime } = this.state
    return (
      <div className="App">
        <header className="App-header">
          {showTime ? 
            <Clock turnOffButton={ this.turnOffButton } showTime={ showTime }/>
            : <span>Clique para ver a hora</span>
          }
          <div className='button-class'>
            <Button variant="contained" color="primary" type='button' onClick={ this.turnOffButton }>Clique</Button>
          </div>
        </header>
    </div>
    )
  }
}

export default App;
