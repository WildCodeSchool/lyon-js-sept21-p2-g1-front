import React from 'react';
import phoneImg from '../assets/smartphone.gif';

function Phone() {
  return (
    <div
      className="hidden flex justify-between
     items-center md:flex "
    >
      <p className="mx-96 text-gray-500 text-7xl font-bold text-center flex justify-center items-center italic">
        Une meilleure expérience sur smartphone
      </p>
      <img src={phoneImg} alt="phone" className="" />
    </div>
  );
}

export default Phone;
