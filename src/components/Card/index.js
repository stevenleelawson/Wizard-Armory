import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { NavLink } from 'react-router-dom';

const Card = ({imageUrl, id, info, addToDeck, deck, smallArray, cards}) => {
  let selected;
  if (deck.length > 0) {
    selected = deck.find(fav => fav.id === id) ? 'isSelected' : '';
  }


  const handleDeckBtnClick = (event) => {

    addToDeck(info)
  }

  return (
    <div className={`card ${selected}`} onClick={handleDeckBtnClick}>
        <img src={imageUrl} key={id} alt='magic card'/>
    </div>
  );
};

export default Card;

Card.propTypes = {
  imageUrl: PropTypes.string,
  id: PropTypes.number
};
