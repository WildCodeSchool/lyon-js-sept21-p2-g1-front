import React from 'react';

function CardHome({ name, parking }) {
  return (
    <div className="bg-primary rounded-3xl shadow-2xl  h-96 w-11/12">
      <div className="picture__text  flex items-center flex-col">
        <h1 className="text-white text-center mb-5 p-5 font-fira">{name}</h1>
        <img src={parking} alt={name} />
      </div>
    </div>
  );
}

export default CardHome;
