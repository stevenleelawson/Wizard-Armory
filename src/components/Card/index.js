import React from 'react';

const Card = ({imageUrl, id}) => {
  return (
    <div>
      <img src={imageUrl} key={id}/>
    </div>
  )
}

export default Card;
