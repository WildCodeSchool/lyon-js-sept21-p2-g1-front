import { Button, Checkbox, Form, Input, TextArea } from 'semantic-ui-react';
import RatingStar from '../components/RatingStar';

import img from '../assets/parking.jpg';

const Rating = () => {
  return (
    <div>
      <img className="md:object-center" src={img} alt="parking" />
      <button
        className="bg-red-600  text-black -mt-56 ml-8 font-bold py-4 px-8 rounded-full"
        type="button"
      >
        Avis
      </button>
      <Form className="md:flex space-y-8 mx-16 justify-center flex-col">
        <p className="text-center justify-center font-semibold">
          “Tailwind CSS is the only framework that I've seen scale on large
          teams. It’s easy to customize, adapts to any design, and the build
          size is tiny.”
        </p>
        <Form.Field
          className="shadow-xl rounded-3xl border-gray-400"
          control={Input}
          label="Name"
          placeholder="Name"
        />

        <RatingStar />

        <Form.Field
          className="shadow-xl rounded-3xl border-gray-400"
          control={TextArea}
          label="Message"
          placeholder="Tell us more about us..."
        />
        <Form.Field
          control={Checkbox}
          label="I agree to the Terms and Conditions"
        />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    </div>
  );
};

export default Rating;
