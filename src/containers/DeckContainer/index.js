import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import * as actions from '../../actions';

export const DeckContainer = ({cards, deck, addToDeck}) => {
  console.log('hhhhihiiiiii')
  const displayDeckCards = deck.map( card => {
    return <Card
      info={card}
      imageUrl = {card.imageUrl}
      key = {card.id}
      addToDeck={addToDeck}
    />;
  });
  return (
    <div>{displayDeckCards}</div>
  );
};

export const mapStateToProps = ({cards, deck}) => ({cards, deck});

export const mapDispatchToProps = (dispatch) => ({
  addToDeck: card => dispatch(actions.addToDeck(card))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckContainer);

DeckContainer.propTypes = {
  cards: PropTypes.array
};
