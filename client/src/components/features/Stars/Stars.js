import React from 'react';

const Stars = ({ count }) => {
  const starIcons = [];

  for (let i = 0; i < count; i++) {
    starIcons.push(<i key={i} className="fa fa-star"></i>);
  }

  return <div>{starIcons}</div>;
};

export default Stars;
