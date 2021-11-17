import React from 'react';
import phoneImg from '../assets/smartphone.png';

function Phone() {
  return (
    <div className="hidden md:grid grid-cols-1 ">
      <img className="row-start-1" src={phoneImg} alt={phoneImg} />
    </div>
  );
}

export default Phone;
