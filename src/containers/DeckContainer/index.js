import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import * as actions from '../../actions';
import './styles.css';

export const DeckContainer = ({cards, deck, addToDeck}) => {

  const displayDeckCards = deck.map( card => {
    return <Card
      info={card}
      imageUrl = {card.imageUrl}
      id={card.id}
      key = {card.id}
      addToDeck={addToDeck}
      deck={deck}
    />;
  });
  return (
    <div className='deck-card-container'>{displayDeckCards}</div>
  );
};

export const mapStateToProps = ({cards, deck}) => ({cards, deck});

export const mapDispatchToProps = (dispatch) => ({
  addToDeck: card => dispatch(actions.addToDeck(card))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeckContainer));

DeckContainer.propTypes = {
  cards: PropTypes.object
};
