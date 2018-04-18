import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Card = ({imageUrl, id, info, addToDeck, deck}) => {
  let selected;
  if (deck.length > 0) {
    selected = deck.find(fav => fav.id === id) ? 'isSelected' : '';
  }


  const handleDeckBtnClick = () => {

    addToDeck(info);
  };

  return (
    <div className={`card ${selected}`} onClick={handleDeckBtnClick}>
      <img src={imageUrl} key={id} alt='magic card'/>
    </div>
  );
};

export default Card;

Card.propTypes = {
  imageUrl: PropTypes.string,
  id: PropTypes.string,
  info: PropTypes.object,
  addToDeck: PropTypes.func,
  deck: PropTypes.array
};
