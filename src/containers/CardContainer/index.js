import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import * as actions from '../../actions';

export const CardContainer = ({cards, addToDeck}) => {

  const displayCards = Object.keys(cards).map( color => cards[color].map( card => {
    return <Card
      info={card}
      imageUrl = {card.imageUrl}
      key = {card.id}
      addToDeck={addToDeck}
    />;
  })
);
  console.log('keeeerds', displayCards)
  return (
    // <h1>I be dog</h1>
    <div>{displayCards}</div>
  );
};

export const mapStateToProps = ({cards}) => ({cards});

export const mapDispathToProps = (dispatch) => ({
  addToDeck: card => dispatch(actions.addToDeck(card))
})

export default connect(mapStateToProps, mapDispathToProps)(CardContainer);

CardContainer.propTypes = {
  cards: PropTypes.array
};
