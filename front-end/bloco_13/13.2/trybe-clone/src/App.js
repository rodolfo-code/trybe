import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import Content from './components/Content';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Content />
          <p>Bem vindo a trybe</p>
        </div>
      </Router>
    )
  }
}

export default App;