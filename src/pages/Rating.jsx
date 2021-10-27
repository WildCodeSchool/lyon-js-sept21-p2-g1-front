import { Button, Checkbox, Form, Input, TextArea } from 'semantic-ui-react';
import RatingStar from '../components/RatingStar';
import img from '../assets/parking-vide.png';

const Rating = () => {
  return (
    <div>
      <img className="object-center md:object-center" src={img} alt="parking" />

      <Form className="md:flex space-y-8 mx-16 justify-center flex-col">
        <p className="justify-center font-semibold">
          “Tailwind CSS is the only framework that I've seen scale on large
          teams. It’s easy to customize, adapts to any design, and the build
          size is tiny.”
        </p>
        <Form.Field control={Input} label="Name" placeholder="Name" />

        <RatingStar />

        <Form.Field
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
