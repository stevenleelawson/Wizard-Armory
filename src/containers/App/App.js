import React, { Component } from 'react';
import * as api from '../../apiCalls';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './App.css';
import CardContainer from '../CardContainer';
import Form from '../../components/Form';

export class App extends Component {
  componentDidMount() {
    this.fetchCards();
    this.props.formState(this.props.color)
    console.log('propscolor',this.props)
  }

  fetchCards = async () => {
    const cards = await api.getCards(this.props.color);
    this.props.loadCards(cards);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wizard Armory</h1>
          <Route path='/' render={() => <Form />} />
        </header>
        <Route path='/' render={() => <CardContainer />} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  color: state.color
})

export const mapDispatchToProps = dispatch => ({
  loadCards: cards => dispatch(actions.loadCards(cards)),
  formState: color => dispatch(actions.formState(color))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
