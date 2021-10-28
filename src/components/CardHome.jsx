import React from 'react';
import img from '../assets/parkingS.png';

function CardHome() {
  return (
    <div className="bg-primary rounded-3xl shadow-2xl w-11/12 h-96 flex items-center justify-center flex-col">
      <h1 className="text-white text-center rounded-t-xl">
        {' '}
        Parkings surveillés{' '}
      </h1>
      <img className="inset-x-14" src={img} alt="parkingS" />
    </div>
  );
}

export default CardHome;
