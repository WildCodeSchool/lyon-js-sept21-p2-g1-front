import React from 'react';

const LegendMaps = () => {
  return (
    <div className="boxInfo flex items-center justify-center">
      <div className="boxLegend m-4 border-2 rounded-3xl  shadow-2xl ">
        <div className="flex items-center justify-center">
          <img src="iconHandi.png" alt="pmr" className="w-1 m-4" />
          <p className="text-xs">
            Stationnement accessible aux personnes à mobilité réduite
          </p>
        </div>

        <div className="flex items-center justify-center mt-3 m-4">
          <img
            src="iconHeight.png"
            alt="hauteur véhicule"
            className="w-8 m-4"
          />
          <p className="text-xs">La hauteur du parking est inférieure à 2m</p>
        </div>

        <div className="flex items-center justify-center mt-3">
          <img src="iconCarShare.png" alt="autopartage" className="w-3 m-4" />
          <p className="text-xs">
            Stationnement accessible aux véhicules en autopartage
          </p>
        </div>
      </div>
      <div className="DataBox flex items-center m-8 justify-center flex-col">
        <img src="grandLyon.jpeg" alt="pmr" />
        <p>
          Les datas sont fournies à titre indicatif par la métropole de Lyon.
        </p>
      </div>
    </div>
  );
};

export default LegendMaps;
