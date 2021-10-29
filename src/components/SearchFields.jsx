// // PARTIE RECHERCHE
// function Search({ panTo }) {
//   const history = useHistory();
//   const location = useLocation();
//   const [address, setAddress] = React.useState();

//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       location: { lat: () => 43.6532, lng: () => -79.3832 },
//       radius: 100 * 1000,
//     },
//   });
//   React.useEffect(() => {
//     setValue(qs.parse(location.search).search, false);
//     setAddress(qs.parse(location.search).search);
//   }, [location]);

//   const geocode = async () => {
//     try {
//       const results = await getGeocode({ address });
//       const { lat, lng } = await getLatLng(results[0]);
//       panTo({ lat, lng });
//     } catch (error) {
//       console.log('😱 Error: ', error);
//     }
//   };
//   React.useEffect(() => {
//     geocode(address);
//   }, [address]);
//   // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

//   const handleInput = (e) => {
//     setValue(e.target.value);
//   };

//   const handleSelect = async (addr) => {
//     setValue(addr, false);
//     clearSuggestions();
//     setAddress(addr);

//     const searchParam = qs.stringify({ search: addr });
//     history.push(`/searchMap?${searchParam}`);
//   };

//   // RECUPERE LES SUGGESTIONS GOOGLE

//   return (
//     <div className="search">
//       <Combobox onSelect={handleSelect}>
//         <ComboboxInput
//           value={value}
//           onChange={handleInput}
//           disabled={!ready}
//           placeholder="Ou souhaitez vous trouver une place ? 🚗 "
//         />

//         <ComboboxPopover>
//           <ComboboxList>
//             {status === 'OK' &&
//               data.map(({ id, description }) => (
//                 <ComboboxOption key={id} value={description} />
//               ))}
//           </ComboboxList>
//         </ComboboxPopover>
//       </Combobox>
//     </div>
//   );
// }
