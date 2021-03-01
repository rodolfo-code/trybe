import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Routes from './pages/Routes';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
