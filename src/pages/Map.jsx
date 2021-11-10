import React from 'react';
import Api from '../components/Api';
import Maps from '../components/Maps';

function Map() {
  return (
    <div>
      <Maps />
      <p className="text-center m-4"> Made with Google Maps API</p>
    </div>
  );
}

export default Map;
