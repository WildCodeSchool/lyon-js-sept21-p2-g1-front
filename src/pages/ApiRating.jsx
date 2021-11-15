import { useEffect, useState } from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react';

import RatingStar from '../components/RatingStar';

import img from '../assets/parkingRating.jpg';

function ApiRating() {
  const [userList, updateUserList] = useState([]);
  const [newUserName, setNewUserName] = useState('');
  const [newUserMessage, setNewUserMessage] = useState('');
  const MAX_LENGTH = 30;

  // évite que la page ne se recharge
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5001/users', {
        name: newUserName,
        message: newUserMessage,
      })
      .then((resp) => {
        updateUserList([...userList, resp.data]);
      });
  };

  const handleNameChange = (e) => {
    setNewUserName(e.target.value);
  };
  const handleMessageChange = (e) => {
    if (e.target.value.lenght <= MAX_LENGTH) {
      setNewUserMessage(e.target.value);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:5001/users').then((response) => {
      updateUserList(response.data);
    });
  }, []);

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
        <p className=" font-sans text-center text-2xl md:text-1xl-lg font-semibold ">
          “Merci de bien vouloir nous donner 5 min.de votre temps pour évaluer
          l'application.🧐 ”
        </p>
      </div>

      <Form onSubmit={handleSubmit} type="textarea">
        <Form className="flex  flex-col mx-20 my-10  rounded-3xl border-gray-400 sm:w-9/12 md:w-7/12 lg:w-10/12">
          <Form.Input
            type="text"
            placeholder="Votre nom"
            name="name"
            required
            value={newUserName}
            onChange={handleNameChange}
          />

          <div className="flex m-8 justify-center items-center">
            <RatingStar />
          </div>

          <Form.Input
            type="textarea"
            placeholder="Laissez-nous votre avis..."
            name="message"
            required
            value={newUserMessage}
            onChange={handleMessageChange}
          />

          <Form.Checkbox
            className="flex m-8 flex-col items-center w-full px-5 rounded-3xl border-gray-400 sm:w-full md:w-11/12 "
            required
            label="I agree to the Terms and Conditions"
          />

          <Form.Button
            content="Submit"
            required
            onChange={handleSubmit}
            value="Submit"
          />
        </Form>
      </Form>
    </div>
  );
}

export default ApiRating;
