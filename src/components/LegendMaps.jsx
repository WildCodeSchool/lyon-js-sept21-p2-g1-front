import React from 'react';
import '../search.css';

const LegendMaps = () => {
  return (
    <div className="boxInfo flex justify-center pt-14 items-stretch pb-10">
      <div className="boxLegend m-4 border-2 border-gray-400 rounded-3xl  shadow-2xl ">
        <div className="flex items-center justify-center mt-2">
          <img src="iconHandi.png" alt="pmr" className="w-12" />
          <p className="text-xs">
            Stationnement accessible aux personnes à mobilité réduite
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="iconHeight.png"
            alt="hauteur véhicule"
            className="w-12 m-4"
          />
          <p className="text-xs">La hauteur du parking est inférieure à 2m</p>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="iconCarShare.png"
            alt="autopartage"
            className="w-12 mb-4 mx-6"
          />
          <p className="text-xs">
            Stationnement accessible aux véhicules en autopartage
          </p>
        </div>
      </div>
      <div className="DataBox flex items-center m-8 justify-center flex-col">
        <img src="grandLyon.jpeg" alt="Grand Lyon Logo " />
        <p className="italic text-gray-600">
          Les datas sont fournies à titre indicatif par la métropole de Lyon.
        </p>
      </div>
    </div>
  );
};

export default LegendMaps;
