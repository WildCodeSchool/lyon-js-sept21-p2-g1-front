import React, { useState } from 'react';
import { Widget } from '@uploadcare/react-widget';
import { Button, Checkbox, Form, FormField } from 'semantic-ui-react';
import axios from 'axios';
import imgBg from '../assets/carParkFull.jpg';
import '../share.css';

const customBtn = () => ({
  buttons: {
    choose: {
      files: {
        one: 'upLoadez votre photo',
      },
    },
  },
});

function sharePlace() {
  const [userName, setUserName] = useState('');
  const [img, setImage] = useState('');
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const submitPlace = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lon = position.coords.longitude;
          const lat = position.coords.latitude;
          axios
            .post('http://localhost:5001/streetParkingSpots', {
              userName,
              lat,
              lon,
              img,
            })
            .then(() => {
              alert('Merci');
            });
        },
        () => {
          alert(`Vous avez refusé la géolocalisation`);
        }
      );
    }
  };
  return (
    <div className="flex flex-col justify-center">
      <div className="lg:h-40">
        <img
          className="object-cover h-48 w-full object-center"
          src={imgBg}
          alt="parking"
        />
      </div>
      <p className="p-20 flex justify-center">
        Vous liberez une place de parking dans la rue ? Vous voyez une place
        disponible ? Partagez l'information avec une photo pour la communauté de
        Space-Park
      </p>

      <Form>
        <Form.Field className="flex justify-center w-3/4">
          <label htmlFor="name" className="m-2">
            Votre nom
            <input
              id="name"
              name="name"
              type="text"
              className="m-2"
              placeholder="Votre nom"
              onChange={handleNameChange}
            />
          </label>
        </Form.Field>

        <FormField className="flex justify-center w-3/4">
          {/* <label htmlFor="file" className="m-2">
            Votre photo : <input id="file" name="file" /> */}
          <Widget
            publicKey="bf85fdb4cd586983b065"
            id="file"
            name="file"
            localeTranslations={customBtn()}
            onChange={(info) => setImage(info.cdnUrl)}
          />
        </FormField>
        <Form.Field className="flex justify-center w-3/4">
          <Checkbox label=" J'ai lu et j'accepte les Conditions Générales d'Utilisation de Space Park" />
        </Form.Field>
        <Button className="submitBtn" type="submit" onClick={submitPlace}>
          Partagez votre Place
        </Button>
      </Form>
    </div>
  );
}

export default sharePlace;
