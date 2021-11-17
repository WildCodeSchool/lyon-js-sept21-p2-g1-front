import React from 'react';
import phone from '../assets/phone.png';

function Phone() {
  return (
    <div className="phone__container hidden md:flex justify-end animate-bounce">
      <img className="phone" style={{ height: 100 }} src={phone} alt="Phone#" />
    </div>
  );
}

export default Phone;
