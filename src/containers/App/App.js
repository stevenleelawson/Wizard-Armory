import React, { Component } from 'react';
import * as api from '../../apiCalls';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import './App.css';
import CardContainer from '../CardContainer';

export class App extends Component {
  componentDidMount() {
    this.fetchCards();
  }

  fetchCards = async () => {
    const cards = await api.getCards('green');
    this.props.loadCards(cards);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wizard Tracker</h1>
        </header>
        <CardContainer />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  loadCards: cards => dispatch(actions.loadCards(cards))
});


export default connect(null, mapDispatchToProps)(App);
