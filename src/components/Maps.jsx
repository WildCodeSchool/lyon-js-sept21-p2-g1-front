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
  width: '100%',
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
  const [selectedSpot, setSelectedSpot] = React.useState(false);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(17);
  }, []);

  const urlDataLyon =
    'https://download.data.grandlyon.com/ws/grandlyon/pvo_patrimoine_voirie.pvoparking/all.json?maxfeatures=1200&start=1';

  const urlDbSpot = 'http://localhost:5001/streetParkingSpots';
  const { data, error } = useSwr(urlDataLyon, { fetcher });
  const { data: dataDb, error: errorDb } = useSwr(urlDbSpot, { fetcher });

  const parkings = data && !error ? data.values.slice(0, 2000) : [];
  const spots = dataDb && !errorDb ? dataDb.slice(0, 2000) : [];
  console.log(urlDbSpot);

  if (loadError) return 'Error';
  if (!isLoaded) return 'Loading...';

  // PARTIE API
  return (
    <div className="mapBox">
      <Locate setLocalisation={setLocalisation} panTo={panTo} />
      <Search panTo={panTo} />
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={defaultLocation}
        options={options}
        onLoad={onMapLoad}
      >
        {spots.map((spot) => {
          const SpotLocation = { lat: spot.lat, lng: spot.lon };
          const SpotLocationMarker = { lat: spot.lat + 0.0025, lng: spot.lon };

          const wazeSpot = `https://www.waze.com/ul?ll=${spot.lat}%2C${spot.lon}&navigate=yes&zoom=17`;

          return (
            <div key={uniqid()}>
              <Marker
                // className="parking-marker"
                key={uniqid()}
                position={SpotLocation}
                onClick={() => setSelectedSpot(spot.id)}
                icon={{
                  url: `car-Spot.png`,
                }}
              />
              {selectedSpot === spot.id ? (
                <InfoWindow
                  key={uniqid()}
                  position={SpotLocationMarker}
                  disableAutoPan="true"
                >
                  <div className="flex items-center justify-center flex-col">
                    <h4 className="text-yellow-500 text-lg">
                      Place proposée par {spot.userName}
                    </h4>
                    <img
                      src={spot.img}
                      alt="place proposée"
                      className="w-auto h-30 bg-cover rounded-xl shadow-xl"
                    />
                    <button className="flex items-center mt-6 btnWaze">
                      <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                              fill="currentColor"
                              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            />
                          </svg>
                        </div>
                      </div>
                      <a
                        href={wazeSpot}
                        target="blank"
                        className="flex items-center justify-center"
                      >
                        <span> Waze</span>
                        <img src="iconWaze.png" alt="waze" />
                      </a>
                    </button>
                  </div>
                </InfoWindow>
              ) : null}
            </div>
          );
        })}
        {parkings.map((parking) => {
          const Parklocation = { lat: parking.lat, lng: parking.lon };
          const ParklocationMarker = {
            lat: parking.lat + 0.0025,
            lng: parking.lon,
          };
          const price = parking.reglementation;

          const handi = parking.capacitepmr;
          const height = parking.gabarit;
          const carShare = parking.capaciteautopartage;
          const wazePark = `https://www.waze.com/ul?ll=${parking.lat}%2C${parking.lon}&navigate=yes&zoom=17`;
          const icon = () => {
            return price === 'Gratuit' ? `car-park.png` : `car-park2.png`;
          };
          return (
            <div key={uniqid()}>
              <Marker
                className="parking-marker"
                key={uniqid()}
                position={Parklocation}
                onClick={() => setSelected(parking.gid)}
                icon={{
                  url: icon(),
                }}
              />
              {selected === parking.gid ? (
                <InfoWindow
                  key={uniqid()}
                  position={ParklocationMarker}
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

                    <>
                      <button className="flex items-center mt-2 btnWaze">
                        <div className="svg-wrapper-1">
                          <div className="svg-wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path
                                fill="currentColor"
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                              />
                            </svg>
                          </div>
                        </div>
                        <a
                          href={wazePark}
                          target="blank"
                          className="flex items-center"
                        >
                          <span> Waze</span>
                          <img src="iconWaze.png" alt="waze w-1" />
                        </a>
                      </button>
                    </>
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
      <div className="absolute mt-48 ml-14 z-10">
        <img
          onClick={handleToggle}
          className={isActiveBtn ? null : 'animBtn'}
          src="https://img.icons8.com/color/90/000000/compass--v1.png"
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
        <div className="flex items-center justify-center mb-4  md:mt-12">
          <ComboboxInput
            value={value}
            onChange={handleInput}
            disabled={!ready}
            className="w-full shadow-2xl p-3 flex border-2 border-primary h-12 rounded-md focus:outline-none text-gray-700 text-lg mx-4 items-center text-center md:w-3/4"
            placeholder="🔎 Ou souhaitez vous trouver une place ? 🚗 "
          />
        </div>
        <ComboboxPopover>
          <ComboboxList>
            {status === 'OK' &&
              data.map(({ id, description }) => (
                <ComboboxOption
                  key={id}
                  value={description}
                  className="text-gray-800"
                />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
