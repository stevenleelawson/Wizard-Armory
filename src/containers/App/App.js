import React, { Component } from 'react';
import * as api from '../../apiCalls';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import './App.css';

export class App extends Component {
  componentDidMount() {
    this.fetchCards();
  }

  fetchCards = async () => {
    const cards = await api.getCards('green');
    console.log(this.props)
    this.props.loadCards(cards);
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

export const mapDispatchToProps = dispatch => ({
  loadCards: cards => dispatch(actions.loadCards(cards))
});


export default connect(null, mapDispatchToProps)(App);
