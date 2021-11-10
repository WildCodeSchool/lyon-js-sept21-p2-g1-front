import React, { createContext } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

//   return (
// if(loadError) {
// return 'Error';
// },
// if (!isLoaded) {return 'Loading'};
//   )}

const loadingMapsContext = createContext({});
export default loadingMapsContext;

export const LoadMapsContextProvider = ({ children }) => {
  const libraries = ['places'];
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  return (
    <loadingMapsContext.Provider value={{ isLoaded, loadError }}>
      {children}
    </loadingMapsContext.Provider>
  );
};
