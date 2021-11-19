import React from 'react';
import '../search.css';

const LegendMaps = () => {
  return (
    <div className="boxInfo flex justify-center pt-14 items-center pb-10 flex-col md:flex-row p-4">
      <div className="boxLegend border-2 border-gray-400 rounded-3xl  shadow-2xl flex flex-col md:flex-row items-center">
        <div className="flex flex-col justify-around items-start pl-4">
          <div className="flex items-center mt-2">
            <img src="car-park.png" alt="parking gratuit" />
            <p className="text-xs pl-2">Parking gratuit</p>
          </div>

          <div className="flex items-center mt-2">
            <img src="car-park2.png" alt="parking gratuit" />
            <p className="text-xs pl-2"> Parking à accès payant</p>
          </div>

          <div className="flex items-center mt-2">
            <img src="car-Spot.png" alt="parking gratuit" />
            <p className="text-xs pl-2">
              Stationnement proposée par Space Park
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-around mx-10 content-end">
          <div className="flex items-center justify-start mt-2">
            <img src="iconHandi.png" alt="pmr" className="w-12" />
            <p className="text-xs">
              Stationnement accessible aux personnes à mobilité réduite
            </p>
          </div>

          <div className="flex items-center justify-start mt-2">
            <img
              src="iconCarShare.png"
              alt="autopartage"
              className="w-12 mb-4 mx-1"
            />
            <p className="text-xs">
              Stationnement accessible aux véhicules en autopartage
            </p>
          </div>

          <div className="flex items-center justify-start mt-2">
            <img
              src="iconHeight.png"
              alt="hauteur véhicule"
              className="w-12 m-2"
            />
            <p className="text-xs">La hauteur du parking est inférieure à 2m</p>
          </div>
        </div>
      </div>
      <div className="DataBox flex items-center m-8 justify-center flex-col">
        <img src="grandLyon.jpeg" alt="Grand Lyon Logo " />
        <p className="italic text-gray-600 text-center">
          Les datas sont fournies à titre indicatif par la métropole de Lyon.
        </p>
      </div>
    </div>
  );
};

export default LegendMaps;
