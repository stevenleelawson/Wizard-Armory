import React, { Component } from 'react';
import * as api from '../../apiCalls';
import * as actions from '../../actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    api.getCards('green')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wizard Tracker</h1>
        </header>

      </div>
    );
  }
}

export default App;
