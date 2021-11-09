import React from 'react';
import Maps from '../components/Maps';
import LegendMaps from '../components/LegendMaps';

function Map() {
  return (
    <div>
      <Maps />
      <LegendMaps />
      <p className="text-center m-4 "> Data de la métropole de Lyon. </p>
    </div>
  );
}

export default Map;
