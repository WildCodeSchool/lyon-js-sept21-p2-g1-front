import React from 'react';

const LegendMaps = () => {
  return (
    <div className="m-4 border-2 rounded-3xl items-center shadow-2xl w-30">
      <div className="flex items-center m-8 justify-center">
        <img src="iconHandi.png" alt="pmr" />
        <p> Stationnement accessible aux personnes à mobilité réduite</p>
      </div>

      <div className="flex items-center m-8 justify-center">
        <img src="iconHeight.png" alt="hauteur véhicule" />
        <p> La hauteur du parking est inférieure à 2m</p>
      </div>

      <div className="flex items-center m-8 justify-center">
        <img src="iconCarShare.png" alt="autopartage" className="w-12" />
        <p> Stationnement accessible aux véhicules en autopartage</p>
      </div>
    </div>
  );
};

export default LegendMaps;
