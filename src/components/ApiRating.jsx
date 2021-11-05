import { useState, useEffect } from 'react';
import axios from 'axios';

const ApiRating = () => {
  const [data, setData] = useState('');
  const fetchData = () => {
    const result = axios.get('https://...').then((res) => {
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
                <li> Année : {datas.name}</li>;
                <li> Coordonnées : {datas.message}</li>;
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default ApiRating;
