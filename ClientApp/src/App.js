import React, { Component } from 'react';
import { Route } from 'react-router';
import { Home } from './components/Home';
//import { Home1 } from './components/Home1';
//import { TotalOutcome } from './components/TotalOutcome';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Route exact path='/' component={Home} />
    );
  }
}
