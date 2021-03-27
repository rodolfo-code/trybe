import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main, About } from './pages';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
};

export default Routes;
