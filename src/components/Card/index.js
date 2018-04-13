import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Card = ({imageUrl, id, info, addToDeck}) => {
  const handleDeckBtnClick = () => {
    addToDeck(info)
  }

  return (
    <div className='card' onClick={(event) => handleDeckBtnClick()}>
      <img src={imageUrl} key={id} alt='magic card'/>
    </div>
  );
};

export default Card;

Card.propTypes = {
  imageUrl: PropTypes.string,
  id: PropTypes.number
};
