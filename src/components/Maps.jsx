import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import '../search.css';
import qs from 'query-string';

import '@reach/combobox/styles.css';
import { useLocation, useHistory } from 'react-router-dom';

const libraries = ['places'];
const mapContainerStyle = {
  height: '500px',
  width: '80%',
};

// const onLoad = (Marker) => {
//   console.log('marker: ', Marker);
// };

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 45.764043,
  lng: 4.835659,
};

export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(17);
  }, []);

  if (loadError) return 'Error';
  if (!isLoaded) return 'Loading...';

  return (
    <div>
      <Locate panTo={panTo} />
      <Search panTo={panTo} />

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
        onLoad={onMapLoad}
      />
    </div>
  );
}

// PARTIE GEOLOCATION

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      {/* <Marker position={panTo} /> */}
      <img
        src="https://img.icons8.com/ios/50/000000/compass--v2.png"
        alt="compass"
      />
    </button>
  );
}

// PARTIE RECHERCHE
function Search(props, { panTo }) {
  const history = useHistory();
  const location = useLocation();
  const [address, setAddress] = React.useState();

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });
  React.useEffect(() => {
    setValue(qs.parse(location.search).search, false);
    setAddress(qs.parse(location.search).search);
  }, [location]);

  const geocode = async () => {
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log('😱 Error: ', error);
    }
  };
  React.useEffect(() => {
    geocode(address);
  }, [address]);
  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (addr) => {
    setValue(addr, false);
    clearSuggestions();
    setAddress(addr);

    const searchParam = qs.stringify({ search: addr });
    history.push(`/searchMap?${searchParam}`);
  };

  // RECUPERE LES SUGGESTIONS GOOGLE

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Ou souhaitez vous trouver une place ? 🚗 "
        />

        <ComboboxPopover>
          <ComboboxList>
            {status === 'OK' &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
