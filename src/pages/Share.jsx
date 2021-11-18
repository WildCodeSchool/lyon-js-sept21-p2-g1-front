import React, { useState } from 'react';
import { Widget } from '@uploadcare/react-widget';
import { Button, Form, FormField } from 'semantic-ui-react';
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
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
    <section id="section" className=" border-b-2 ">
      <div className="flex flex-col justify-center">
        <div className="lg:h-40">
          <img
            className="object-cover h-48 w-full object-center opacity-50"
            src={imgBg}
            alt="parking"
          />
        </div>
        <div className="pt-20 p-30 text-xl flex flex-col text-center italic justify-center text-gray-100	">
          <p> Vous libérez une place de parking dans la rue ? </p>
          <p> Vous voyez une place disponible ? </p>
          <p>
            Partagez l'information avec une photo pour la communauté de
            Space-Park
          </p>
        </div>
        <div className="flex items-center justify-center pb-10">
          <Form
            className="flex flex-col items-center
           justify-center border-gray-600 border-2 rounded-xl w-2/3"
          >
            <div className="boxForm flex flex-col p-10 justify-center items-center lg:flex-row">
              <div className="boxInput flex-col justify-center p-2">
                <div>
                  <Form.Field>
                    <label htmlFor="name" className="text-gray-100">
                      <p className="text-center text-gray-300"> Votre nom : </p>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="m-2 flex flex-col justify-center w-44"
                        onChange={handleNameChange}
                      />
                    </label>
                  </Form.Field>
                </div>

                <FormField className=" flex items-center pt-10 w-30">
                  {/* <label htmlFor="file" className="m-2">
            Votre photo : <input id="file" name="file" /> */}
                  <Widget
                    publicKey="bf85fdb4cd586983b065"
                    tabs="camera"
                    id="file"
                    name="file"
                    localeTranslations={customBtn()}
                    onChange={(info) => setImage(info.cdnUrl)}
                  />
                </FormField>
              </div>
            </div>
            {/* <button onClick={geoloc()} className="border-2 bg-pink-500">
            {' '}
            Geolocalisez moi{' '}
          </button> */}
            <div className="flex items-center pb-6">
              <Checkbox defaultChecked />
              <p className="text-gray-300">
                En cliquant sur partagez vous acceptez les conditions
                d'utilisations de Space-Park
              </p>
            </div>
            <div className="w-30 pb-10">
              <Button
                type="submit"
                onClick={submitPlace}
                className="flex justify-center items-center w-30"
              >
                Partagez votre Place
              </Button>
            </div>
            <div>
              <iframe
                src="https://giphy.com/embed/EFGDfCzS5YA48"
                title="gif"
                width="480"
                height="330"
                frameBorder="0"
                className="hidden md:flex"
                allowFullScreen
              />
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default sharePlace;
