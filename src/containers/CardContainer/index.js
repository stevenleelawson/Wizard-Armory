import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import * as actions from '../../actions';

export const CardContainer = ({cards, addToDeck, color}) => {
  let displayCards;
  if (Object.keys(cards).length) {
    if (color === 'White') {
      let smallArray = cards.White.filter( card => card.imageUrl)
      console.log('smol',smallArray)
      displayCards = smallArray.map( card => {
        return <Card
          info={card}
          imageUrl ={card.imageUrl}
          key={card.id}
          addToDeck={addToDeck}
        />
      })
    }

  }
  console.log('kerds', displayCards)
//   const displayCards = Object.keys(cards).map( color => cards[color].map( card => {
//     return <Card
//       info={card}
//       imageUrl = {card.imageUrl}
//       key = {card.id}
//       addToDeck={addToDeck}
//     />;
//   })
// );
  return (
    // <div>{smallArray}</div>
    <div>{displayCards}</div>

  );
};

export const mapStateToProps = ({cards, color}) => ({cards, color});

export const mapDispathToProps = (dispatch) => ({
  addToDeck: card => dispatch(actions.addToDeck(card))
})

export default connect(mapStateToProps, mapDispathToProps)(CardContainer);

CardContainer.propTypes = {
  cards: PropTypes.array
};
