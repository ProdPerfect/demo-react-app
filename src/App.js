import React, { Component } from 'react';
import logo from './logo.svg';
import p2Logo from './p2-color-logo.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header p2-header">
          <img src={p2Logo} className="p2-logo" alt="Prod Perfect logo" />
        </header>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
