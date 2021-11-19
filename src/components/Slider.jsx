import React from 'react';
import Slider from 'react-slick';
import useSWR from 'swr';

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  };

  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());
  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_BASE_URL}/ratings`,
    fetcher
  );
  const ratings = data && !error ? data.slice(0, 4) : [];
  return (
    <Slider {...settings}>
      {ratings.map((rating) => {
        return (
          <div
            className=" bg-white border-2 rounded-lg flex justify-center items-center py-10 mt-52"
            id="slider"
          >
            <div className="text-black text-2xl text-center pt-4">
              {rating.note} ⭐️
            </div>
            <div className="text-black text-4xl  px-6 text-center pt-6">
              {' '}
              {rating.name}{' '}
            </div>
            <div className="text-black text-2xl text-center pt-6">
              {' '}
              {rating.message}{' '}
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
export default SimpleSlider;
