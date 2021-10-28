import React from 'react';
import { Rating } from 'semantic-ui-react';

const Footer = () => (
  <div className="bg-secondary w-full h-72 flex justify-center items-center flex-col">
    <Rating maxRating={5} defaultRating={3} icon="star" size="massive" />
  </div>
);

export default Footer;
