import React from 'react';
import stars from '../__helpers__/stars'


const Stars = ({ rating }) => (
  <span className="title-overall-star" dangerouslySetInnerHTML={{ __html: stars(rating) }}></span>
);


export default Stars;