import React from 'react';
import { Rating, Icon } from 'semantic-ui-react';

const Footer = () => (
  <div className="footer">
    <div className="bg-secondary w-full h-72 flex justify-center items-center flex-col">
      <Rating maxRating={5} defaultRating={3} icon="star" size="massive" />
      <div className="social flex-row my-14 mb-6 space-x-4 cursor-pointer">
        <Icon name="facebook f" size="big" color="orange" />
        <Icon name="instagram" size="big" color="orange" />
        <Icon name="twitter" size="big" color="orange" />
      </div>
      <div className="copyrit">
        <p className="text-white"> © Space Park 2021 </p>
      </div>
    </div>
  </div>
);

export default Footer;
