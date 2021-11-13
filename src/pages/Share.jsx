import React from 'react';
import { Widget } from '@uploadcare/react-widget';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import icon from '../assets/gps.png';

function Share() {
  return (
    <div>
      <p>
        Vous liberez une place de parking dans la rue ? Vous voyez une place
        disponible ? Partagez l'information avec une photo pour la communauté de
        Space-Park
      </p>

      <Form>
        <Form.Field>
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
          <div>
            <p> Géolocalisez moi : </p>
            <img src={icon} alt="geoloc btn" />
          </div>
        </Form.Field>
        <label htmlFor="file" className="m-2">
          Votre photo :{/* <input id="file" name="file" /> */}
          <Widget publicKey="Yc80aef425dbde274da96" id="file" name="file" />
        </label>
        <Form.Field>
          <Checkbox label=" J'ai lu et j'accepte les Conditions Générales d'Utilisation de Space Park" />
        </Form.Field>
        <Button type="submit">Partagez votre Place</Button>
      </Form>
    </div>
  );
}

export default Share;
