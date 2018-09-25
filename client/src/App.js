import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, NoMatch } from './views';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
