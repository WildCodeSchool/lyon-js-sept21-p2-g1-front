import React from 'react';
import phoneImg from '../assets/smartphone.png';

function Phone() {
  return (
    <div className="hidden md:flex ">
      <img className="w-full" src={phoneImg} alt={phoneImg} />
    </div>
  );
}

export default Phone;
