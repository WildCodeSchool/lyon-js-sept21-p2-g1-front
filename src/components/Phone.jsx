import React from 'react';
import phoneImg from '../assets/smartphone.png';

function Phone() {
  return (
    <div className="hidden md:flex">
      <img src={phoneImg} alt={phoneImg} />
    </div>
  );
}

export default Phone;
