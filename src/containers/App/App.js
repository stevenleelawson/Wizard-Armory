import React, { Component } from 'react';
import * as api from '../../apiCalls';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import CardContainer from '../CardContainer';
import DeckContainer from '../DeckContainer';
import Form from '../Form';
import PropTypes from 'prop-types';
import SignUpForm from '../../components/SignUpForm';
import SignInForm from '../../components/SignInForm';
import Navigation from '../../components/Navigation';
import { firebase } from '../../firebase';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null}));
    });

  }

  componentDidUpdate(prevProps, nextProps) {
    if (prevProps !== nextProps) {
      this.fetchCards();
    }
  }

  fetchCards = async () => {
    const color = this.props.color;

    if (!this.props.cards[color]) {
      const cards = await api.getCards(this.props.color);
      this.props.loadCards(cards, color);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">WIZARD ARMORY</h1>
          <Route exact path='/' component={Form} />
          <Navigation authUser={this.state.authUser} />
        </header>
        <Route exact path='/' component={CardContainer} />
        <Route exact path='/deck' component={DeckContainer} />
        <Route exact path='/signup' component={SignUpForm} />
        <Route exact path='/signin' component={SignInForm} />
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
  loadCards: PropTypes.func,
  cards: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};
