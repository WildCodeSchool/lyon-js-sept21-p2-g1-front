import React, { useState } from 'react';
import axios from 'axios';
import { Form, Rating } from 'semantic-ui-react';

import img from '../assets/parkingRating.jpg';

function ApiRating() {
  const [newUserName, setNewUserName] = useState('');
  const [newUserMessage, setNewUserMessage] = useState('');
  const [userRating, setUserRating] = useState(3);

  // évite que la page  se recharge
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5001/ratings', {
        name: newUserName,
        message: newUserMessage,
        note: userRating,
      })
      .then(() => {
        alert('Merci pour votre participation.');
      });
  };

  const handleNameChange = (e) => {
    setNewUserName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setNewUserMessage(e.target.value);
  };

  const handleChangeOnRate = (e, { rating }) => {
    setUserRating(rating);
  };

  return (
    <div id="section" className="border-b-2">
      <div className="lg:h-40">
        <img
          className="object-cover h-48 w-full object-center opacity-50"
          src={img}
          alt="parking"
        />
      </div>
      <p className="pt-20 p-30 text-xl flex flex-col text-center italic justify-center text-gray-100	">
        Merci de bien vouloir nous donner 5 min.de votre temps pour évaluer
        l'application.🧐
      </p>
      <div className="flex items-center justify-center pb-10">
        <Form
          onSubmit={handleSubmit}
          className="flex flex-col items-center
         justify-center rounded-xl w-2/3"
        >
          <p className="text-center text-gray-300"> Votre nom : </p>
          <Form.Input
            type="text"
            placeholder="Votre nom"
            name="name"
            required
            value={newUserName}
            onChange={handleNameChange}
          />

          <div className="flex m-8 justify-center items-center">
            <div>
              <Rating
                value={userRating}
                onRate={handleChangeOnRate}
                maxRating={5}
                icon="star"
                size="huge"
              />
            </div>
          </div>

          <p className="text-center text-gray-300">
            Donnez nous votre avis à propos de votre expérience
          </p>
          <Form.TextArea
            name="message"
            required
            value={newUserMessage}
            onChange={handleMessageChange}
          />
          <div className="flex flex-row">
            <Form.Checkbox required />
            <p className="text-gray-300 ml-6">
              En cliquant sur partagez vous acceptez les conditions
              d'utilisations de Space-Park
            </p>
          </div>
          <Form.Button input="text" content="Submit" required value="Submit" />
          <div>
            <iframe
              src="https://giphy.com/embed/PMi3guLoOyd48MKDV5"
              title="gif"
              width="480"
              height="330"
              frameBorder="0"
              className="hidden pb-10 md:flex"
              allowFullScreen
            />
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ApiRating;
