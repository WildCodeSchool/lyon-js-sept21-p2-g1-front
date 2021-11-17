import { useState } from 'react';
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
    <div>
      <div className="lg:h-40">
        <img className="object-cover h-48 w-full" src={img} alt="parking" />
      </div>
      <button
        className="bg-yellow-500  text-black -mt-56 ml-8 font-bold py-4 px-8 rounded-full"
        type="button"
      >
        Avis
      </button>
      <div className="flex flex-col my-10">
        <p className=" font-sans text-center text-1xl md:text-1xl-lg font-semibold ">
          “Merci de bien vouloir nous donner 5 min.de votre temps pour évaluer
          l'application.🧐 ”
        </p>
      </div>

      <Form
        onSubmit={handleSubmit}
        className="flex  flex-col mx-20 my-10  rounded-3xl border-gray-400 sm:w-9/12 md:w-7/12 lg:w-10/12"
      >
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

        <Form.TextArea
          placeholder="Tell us more"
          name="message"
          required
          value={newUserMessage}
          onChange={handleMessageChange}
        />
        <Form.Checkbox
          className="flex  flex-col items-center w-full px-5 rounded-3xl border-gray-400 sm:w-full md:w-11/12 "
          required
          label="I agree to the Terms and Conditions"
        />
        <Form.Button input="text" content="Submit" required value="Submit" />
      </Form>
    </div>
  );
}

export default ApiRating;
