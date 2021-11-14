import React from 'react';
import { Widget } from '@uploadcare/react-widget';
import { Button, Checkbox, Form, FormField } from 'semantic-ui-react';
import icon from '../assets/gps.png';
import img from '../assets/carParkFull.jpg';
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
function Share() {
  return (
    <div className="flex flex-col justify-center">
      <div className="lg:h-40">
        <img
          className="object-cover h-48 w-full object-center"
          src={img}
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
            />
          </label>
        </Form.Field>
        <FormField className="flex justify-center w-3/4">
          <div>
            <p> Géolocalisez moi : </p>
            <img
              src={icon}
              alt="geoloc btn"
              onClick={function Locate() {
                return (
                  <div>
                    <>
                      if(navigator.geolocation)
                      {navigator.geolocation.getCurrentPosition(
                        (position) => {
                          const long = position.coords.longitude;
                          const lat = position.coords.latitude;
                          console.log(long);
                          console.log(lat);
                        },
                        () => {
                          alert(`Vous avez refusé la géolocalisation`);
                        }
                      )}
                    </>
                  </div>
                );
              }}
            />
          </div>
        </FormField>

        <FormField className="flex justify-center w-3/4">
          {/* <label htmlFor="file" className="m-2">
            Votre photo : <input id="file" name="file" /> */}
          <Widget
            publicKey="bf85fdb4cd586983b065"
            id="file"
            name="file"
            localeTranslations={customBtn()}
          />
        </FormField>
        <Form.Field className="flex justify-center w-3/4">
          <Checkbox label=" J'ai lu et j'accepte les Conditions Générales d'Utilisation de Space Park" />
        </Form.Field>
        <Button className="submitBtn" type="submit">
          Partagez votre Place
        </Button>
      </Form>
    </div>
  );
}

export default Share;
