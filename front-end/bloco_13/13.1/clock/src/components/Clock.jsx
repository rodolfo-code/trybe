import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Clock.css';

const ONE_SECOND = 1000;


class Clock extends Component {
  constructor(props) {
    super(props)

    this.setUpState = this.setUpState.bind(this)
  
    this.state = {
       currentDate: new Date(),
    }
  }

  componentDidMount() {
    this.setUpState()
  }

  setUpState() {
    this.intervelId =setInterval(() => {
      this.setState({
        currentDate: new Date()
      })
    }, ONE_SECOND);
  }

  componentWillUnmount() {
    clearInterval(this.intervelId)
  }
   
  render() {
    const { currentDate } = this.state;
    const { showTime } = this.props
    return (
      <div>
        <div className='container'>
          {
            showTime && <span className='data'>{currentDate.toLocaleTimeString()}</span>
          }
        </div>
      </div>
    )
  }
}

Clock.propTypes ={
  showTime: PropTypes.bool.isRequired,
}

export default Clock;