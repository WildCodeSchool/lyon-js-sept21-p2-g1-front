import { useState, useEffect } from 'react';
import axios from 'axios';

const Api = () => {
  const [data, setData] = useState('');
  const fetchData = () => {
    const result = axios
      .get(
        'https://download.data.grandlyon.com/ws/grandlyon/pvo_patrimoine_voirie.pvoparking/all.json?maxfeatures=100&start=1'
      )
      .then((res) => {
        setData(res.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data &&
          data.values.map((datas) => {
            return (
              <div className="table-auto flex justify-center">
                <li> Année : {datas.lat}</li>;
                <li> Coordonnées : {datas.lon}</li>;
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default Api;
