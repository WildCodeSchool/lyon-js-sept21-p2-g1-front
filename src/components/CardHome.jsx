/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
// import img from '../assets/parkingS.png';

function CardHome({ name, parking }) {
  return (
    <div className="bg-primary rounded-3xl shadow-2xl w-11/12 h-96">
      <div className="picture__text  flex items-center justify-center flex-col">
        <h1 className="text-white text-center mb-5 p-5">{name}</h1>
        <img src={parking} alt={name} />
      </div>
    </div>
  );
}

export default CardHome;
