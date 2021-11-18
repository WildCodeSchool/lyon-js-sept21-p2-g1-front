import React from 'react';
import Maps from '../components/Maps';
import LegendMaps from '../components/LegendMaps';
import imgBg from '../assets/carParkMaps.jpg';

function Map() {
  return (
    <div>
      <div className="lg:h-40">
        <img
          className="object-cover
          
          h-52 w-full object-center pb-8"
          src={imgBg}
          alt="parking"
        />
      </div>
      <Maps />
      <LegendMaps className="pt-5" />
    </div>
  );
}

export default Map;
