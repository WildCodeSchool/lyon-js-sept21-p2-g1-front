import React, { useState } from 'react';
import { Widget } from '@uploadcare/react-widget';
import { Button, Form, FormField } from 'semantic-ui-react';
import axios from 'axios';
import Swal from 'sweetalert2';
import imgBg from '../assets/carParkFull.jpg';
import '../share.css';
import '../index.css';

const customBtn = () => ({
  buttons: {
    choose: {
      files: {
        one: 'Partagez votre photo',
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
              Swal.fire({
                title: 'Well done 😀',
                text: 'Space Park te remercie pour ton partage',
                imageUrl:
                  'https://media.giphy.com/media/J4sITQCofMaKpx7EWq/giphy.gif',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'gif succes',
              });
            });
        },
        () => {
          Swal.fire({
            title: 'Oh nooooooon',
            text: 'Nous ne pouvons pas récuperer ta position',
            imageUrl:
              'https://media.giphy.com/media/llmrnMkLqcssM6sYG7/giphy.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'gif error',
          });
        }
      );
    }
  };
  return (
    <section id="section" className="border-white border-b-2">
      <div className="flex flex-col justify-center">
        <div className="lg:h-40">
          <img
            className="object-cover h-48 w-full object-center bgTop"
            src={imgBg}
            alt="parking"
          />
        </div>
        <p className="pt-20 p-30 text-xl flex justify-center text-gray-100	">
          Vous liberez une place de parking dans la rue ? Vous voyez une place
          disponible ? Partagez l'information avec une photo pour la communauté
          de Space-Park
        </p>

        <Form>
          <div className="flex flex-col pl-40">
            <Form.Field className="w-3/4 md:w-2/5">
              <label htmlFor="name" className="text-gray-100">
                <p className="text-gray-300"> Votre nom : </p>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="m-2 flex flex-col justify-center"
                  onChange={handleNameChange}
                />
              </label>
            </Form.Field>
          </div>

          <FormField className=" pl-60 w-3/4 p-10">
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
          <p className="text-gray-300 pl-40">
            En cliquant sur Partagez vous acceptez les conditions d'utilisations
            de Space-Park
          </p>
          <div className="pl-60 w-30 p-10">
            <Button
              type="submit"
              onClick={submitPlace}
              className="submitBtn bg-green-300 flex justify-center w-30"
            >
              Partagez votre Place
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
}

export default sharePlace;
