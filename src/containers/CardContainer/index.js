import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../../components/Card';

export const CardContainer = ({cards}) => {
  const displayCards = cards.map( card => {
    return <Card
      imageUrl = {card.imageUrl}
      key = {card.id}
    />;
  });
  return (
    <div>{displayCards}</div>
  );
};

export const mapStateToProps = ({cards}) => ({cards});

export default connect(mapStateToProps)(CardContainer);

CardContainer.propTypes = {
  cards: PropTypes.array
};
