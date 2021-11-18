import React from 'react';
import Slider from 'react-slick';

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <Slider {...settings}>
      <div className="border-double">
        <img src="https://picsum.photos/id/100/400/300" />
      </div>
      <div>
        <img src="https://picsum.photos/id/100/400/300" />
      </div>
      <div>
        <img src="https://picsum.photos/id/100/400/300" />
      </div>
      <div>
        <img src="https://picsum.photos/id/100/400/300" />
      </div>
      <div>
        <img src="https://picsum.photos/id/100/400/300" />
      </div>
    </Slider>
  );
};

export default SimpleSlider;
