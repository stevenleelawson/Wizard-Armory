import React, { Component } from 'react';
import * as api from '../../apiCalls';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';
import CardContainer from '../CardContainer';
import DeckContainer from '../DeckContainer';
import Form from '../../components/Form';
import PropTypes from 'prop-types';

export class App extends Component {
  componentDidUpdate(prevProps, nextProps) {
    if (prevProps !== nextProps) {
      this.fetchCards();

    }
  }

  fetchCards = async () => {
    const color= this.props.color;
    if (this.props.cards[color]) {
      //do somethig
    } else {
      console.log('color',color)
      const cards = await api.getCards(this.props.color);
      this.props.loadCards(cards, color);
      console.log('wtf',this.props.cards)
    }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wizard Armory</h1>
          <Route path='/' component={Form} />
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/deck'>MyDeck</NavLink>
        </header>
        <Route exact path='/' component={CardContainer} />
        <Route exact path='/deck' component={DeckContainer} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  color: state.color,
  cards: state.cards
});

export const mapDispatchToProps = dispatch => ({
  loadCards: (cards, color) => dispatch(actions.loadCards(cards, color)),
  formState: color => dispatch(actions.formState(color))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  color: PropTypes.string,
  loadCards: PropTypes.func
};
