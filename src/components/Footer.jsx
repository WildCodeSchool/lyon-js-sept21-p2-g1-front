import React from 'react';
import { Icon } from 'semantic-ui-react';
import SimpleSlider from './Slider';

// import SimpleSlider from './Slider';

const Footer = () => (
  <div className="bg-secondary w-full h-96 flex justify-center items-center flex-col">
    <SimpleSlider />
    <div className="social flex-row my-14 mb-6 space-x-4 cursor-pointer">
      <Icon name="facebook f" size="big" color="orange" />
      <Icon name="instagram" size="big" color="orange" />
      <Icon name="twitter" size="big" color="orange" />
    </div>

    <div className="copyright">
      <p className="text-black"> © Space Park 2021 </p>
    </div>
  </div>
);

export default Footer;
