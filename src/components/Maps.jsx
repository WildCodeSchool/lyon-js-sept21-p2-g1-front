import React, { useState } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
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
import uniqid from 'uniqid';
import '../search.css';
import qs from 'query-string';

import '@reach/combobox/styles.css';
import { useLocation, useHistory } from 'react-router-dom';

import useSwr from 'swr';

const libraries = ['places'];
const mapContainerStyle = {
  height: '500px',
  // width: '80%',
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const defaultLocation = {
  lat: 45.764043,
  lng: 4.835659,
};

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Maps() {
  const [localisation, setLocalisation] = useState({ defaultLocation });

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [selected, setSelected] = React.useState(false);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(17);
  }, []);

  const url =
    'https://download.data.grandlyon.com/ws/grandlyon/pvo_patrimoine_voirie.pvoparking/all.json?maxfeatures=20&start=1';

  const { data, error } = useSwr(url, { fetcher });
  const parkings = data && !error ? data.values.slice(0, 2000) : [];

  if (loadError) return 'Error';
  if (!isLoaded) return 'Loading...';

  // PARTIE API

  return (
    <div>
      <Locate setLocalisation={setLocalisation} panTo={panTo} />
      <Search panTo={panTo} />
      <GoogleMap
        className="flex justify-center w-full"
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={defaultLocation}
        options={options}
        onLoad={onMapLoad}
      >
        {parkings.map((parking) => {
          const Parklocation = { lat: parking.lat, lng: parking.lon };
          const handi = parking.capacitepmr;
          const height = parking.gabarit;
          const carShare = parking.capaciteautopartage;
          return (
            <div key={uniqid()}>
              <Marker
                className="parking-marker"
                key={uniqid()}
                position={Parklocation}
                onClick={() => setSelected(parking.gid)}
                icon={{
                  url: `car-park.png`,
                }}
              />
              {selected === parking.gid ? (
                <InfoWindow
                  key={uniqid()}
                  position={Parklocation}
                  disableAutoPan="true"
                >
                  <>
                    <h4 className="text-yellow-500"> {parking.nom} </h4>
                    <p className="italic"> {parking.voieentree}</p>
                    <p className="italic"> {parking.commune} </p>

                    <div className="flex p-2">
                      <img
                        src="iconParking.png"
                        alt="icon Price"
                        className="w-6"
                      />
                      <p className="p-1"> {parking.capacite} places </p>
                    </div>

                    <div className="flex p-2">
                      <img
                        src="iconOpen.png"
                        alt="icon Open Hours"
                        className="w-6"
                      />
                      <p className="p-1"> {parking.fermeture} </p>
                    </div>

                    <div className="flex p-2">
                      <img
                        src="iconPrice.png"
                        alt="icon Price"
                        className="w-6"
                      />
                      <p className="p-1"> {parking.reglementation} </p>
                    </div>

                    <div className="flex items-center">
                      <>
                        {handi > 0 ? (
                          <img
                            src="iconHandi.png"
                            alt=""
                            className="w-10 m-2 "
                          />
                        ) : null}
                      </>
                      <>
                        {height === null ? null : (
                          <img
                            src="iconHeight.png"
                            alt=""
                            className="w-10 m-2"
                          />
                        )}
                      </>
                      <>
                        {carShare > 0 ? null : (
                          <img
                            src="iconCarShare.png"
                            alt=""
                            className="w-10 m-2"
                          />
                        )}
                      </>
                    </div>
                  </>
                </InfoWindow>
              ) : null}
            </div>
          );
        })}
        <Marker
          key={localisation}
          position={localisation}
          icon={{
            url: `carUser.png`,
          }}
        />
        ;
      </GoogleMap>
    </div>
  );
}

// PARTIE GEOLOCATION

function Locate({ panTo, setLocalisation }) {
  // ANIMATION BTN
  const [isActiveBtn, setActiveBtn] = useState('true');
  const handleToggle = () => {
    setActiveBtn(!isActiveBtn);
  };

  return (
    <button
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log('position : ', position);
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
            setLocalisation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <div className=" relative ml-8 mt-4">
        <img
          onClick={handleToggle}
          className={isActiveBtn ? null : 'animBtn'}
          src="https://img.icons8.com/ios/50/000000/compass--v2.png"
          alt="compass"
        />
      </div>
    </button>
  );
}

// PARTIE RECHERCHE
export function Search({ panTo }) {
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
      if (panTo) panTo({ lat, lng });
    } catch (error) {
      // console.log('😱 Error: ', error);
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
    history.push(`/map?${searchParam}`);
  };

  // RECUPERE LES SUGGESTIONS GOOGLE

  return (
    <div className="inputBox">
      <Combobox onSelect={handleSelect}>
        <div className="flex items-center justify-center my-10 ">
          <ComboboxInput
            value={value}
            onChange={handleInput}
            disabled={!ready}
            className="w-3/5 flex border-2 border-primary h-12 rounded-md focus:outline-none text-gray-700 text-lg mx-4 items-center text-center"
            placeholder="🔎 Ou souhaitez vous trouver une place ? 🚗 "
          />
        </div>
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
