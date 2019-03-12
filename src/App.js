import React, { Component } from 'react';
import p2Logo from './p2-color-logo.png'
import './App.css';
import Words from './Words'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={p2Logo} className="p2-logo" alt="Prod Perfect logo" />
        </header>
        <Words />
      </div>
    );
  }
}

export default App;
