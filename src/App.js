import React, { Component } from 'react';
import CountryGame from './CountryGame';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = 'flag-app'>
        <header className = "title-header">
          <h1 className = "title-text">Guess the flag</h1>
        </header>
        <CountryGame />
      </div>
    );
  }
}

export default App;