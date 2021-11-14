import { Button, Checkbox, Form, Input, TextArea } from 'semantic-ui-react';
import RatingStar from '../components/RatingStar';

import img from '../assets/parkingRating.jpg';

const Rating = () => {
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
      <Form className="flex flex-col  ">
        <p className=" text-center font-semibold ">
          “Merci de bien vouloir nous donner 5 min. de votre temps pour évaluer
          l'application.🧐 ”
        </p>

        <div className="input flex  flex-col items-center justify-center">
          <Form.Field
            className="flex bg-gray-100 w-full rounded-3xl border-gray-400 sm:w-full md:w-7/12 "
            control={Input}
            placeholder="Name"
          />
          <div className="flex m-8 justify-center items-center">
            <RatingStar />
          </div>
          <Form.Field
            className="flex m-8 w-full bg-gray-100 rounded-3xl border-gray-400 sm:w-full md:w-7/12"
            control={TextArea}
            placeholder="Tell us more about us..."
          />
          <Form.Field
            className="flex m-8 flex-col items-center w-full px-5 rounded-3xl border-gray-400 sm:w-full md:w-11/12 "
            control={Checkbox}
            label="I agree to the Terms and Conditions"
          />
          <Form.Field control={Button}>Submit</Form.Field>
        </div>
      </Form>
    </div>
  );
};

export default Rating;
