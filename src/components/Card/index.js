import React from 'react';
import PropTypes from 'prop-types';

const Card = ({imageUrl, id}) => {
  return (
    <div>
      <img src={imageUrl} key={id} alt='magic card'/>
    </div>
  );
};

export default Card;

Card.propTypes = {
  imageUrl: PropTypes.string,
  id: PropTypes.number
};
