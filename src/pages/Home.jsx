import React from 'react';
import img from '../assets/parking.png';

function Home() {
  return (
    <div>
      <div className="backround__Header">
        <img className="w-full absolute -z-1 top-0" src={img} alt="parking" />
      </div>
    </div>
  );
}

export default Home;
