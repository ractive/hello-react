import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MyComponent} from './MyComponent.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clicks: 0
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React - YES</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MyComponent greeting='world' onClick={this.handleClick} clicks={this.state.clicks} />
      </div>
    );
  }

  handleClick = (e) => {
    this.setState(Object.assign({}, this.state, { clicks: this.state.clicks + 1} ));
  }
}

export default App;
