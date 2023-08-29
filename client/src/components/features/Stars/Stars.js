import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

const Stars = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar key={index} color={index < rating ? '#ffc107' : '#9FA0A3'} />
  ));

  return <div>{stars}</div>;
};

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Stars;
