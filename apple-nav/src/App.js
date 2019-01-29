import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={NavWrapper} />
        <Route exact path="/:name" component={SubNav} />
      </div>
    );
  }
}

export default App;
