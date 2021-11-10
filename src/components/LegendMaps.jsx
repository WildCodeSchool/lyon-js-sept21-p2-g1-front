import React from 'react';

const LegendMaps = () => {
  return (
    <div className="boxInfo flex items-center justify-center">
      <div className="boxLegend m-4 border-2 rounded-3xl  shadow-2xl ">
        <div className="flex items-center justify-center">
          <img src="iconHandi.png" alt="pmr" className="w-8 m-4" />
          <p className="text-xs">
            Stationnement accessible aux personnes à mobilité réduite
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="iconHeight.png"
            alt="hauteur véhicule"
            className="w-8 m-4"
          />
          <p className="text-xs">La hauteur du parking est inférieure à 2m</p>
        </div>

        <div className="flex items-center justify-center">
          <img src="iconCarShare.png" alt="autopartage" className="w-8 m-4" />
          <p className="text-xs">
            Stationnement accessible aux véhicules en autopartage
          </p>
        </div>
      </div>
      <div className="DataBox flex items-center m-8 justify-center flex-col">
        <img src="grandLyon.jpeg" alt="pmr" />
        <p> Data de la métropole de Lyon</p>
      </div>
    </div>
  );
};

export default LegendMaps;
