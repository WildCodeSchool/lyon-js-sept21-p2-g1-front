import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '70%',
  height: '500px',
};

const center = {
  lat: 45.76404,
  lng: 4.8356,
};

function Geolocation() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCbzmXJWK1Me7qFqGp7SdId11XL9oF1Fd8">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Geolocation);
