import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import * as actions from '../../actions';

export const CardContainer = ({cards, addToDeck}) => {
  const displayCards = cards.map( card => {
    return <Card
      info={card}
      imageUrl = {card.imageUrl}
      key = {card.id}
      addToDeck={addToDeck}
    />;
  });
  return (
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
