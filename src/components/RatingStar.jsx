import React from 'react';

import { Rating } from 'semantic-ui-react';

const RatingStar = () => (
  <Rating
    className="md:p32 space-y-16 mx-16 "
    icon="star"
    defaultRating={5}
    maxRating={5}
  />
);

export default RatingStar;
