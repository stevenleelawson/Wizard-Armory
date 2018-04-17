import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import * as actions from '../../actions';
import * as api from '../../apiCalls';
import './styles.css';

export const CardContainer = ({cards, addToDeck, color, deck}) => {
  let displayCards;
  if(cards[color]) {
    const smallArray = cards[color].filter( card => card.imageUrl)
    displayCards = smallArray.map( card => {
      return <Card
        info={card}
        imageUrl={card.imageUrl}
        key={card.id}
        addToDeck={addToDeck}
        deck={deck}
        smallArray={smallArray}
      />
    })
  }
  return (
    <div className='card-container'>{displayCards}</div>

  );
};

export const mapStateToProps = ({cards, color, deck}) => ({cards, color, deck});

export const mapDispathToProps = (dispatch) => ({
  addToDeck: card => dispatch(actions.addToDeck(card))
})

export default connect(mapStateToProps, mapDispathToProps)(CardContainer);

CardContainer.propTypes = {
  cards: PropTypes.array
};
