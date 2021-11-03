import React from 'react';
import img1 from '../assets/Cat1.png';
import img2 from '../assets/Cat2.png';
import img3 from '../assets/Cat3.png';
import img4 from '../assets/Cat4.png';

const AboutUs = () => {
  return (
    <div
      className="grid overflow-hidden grid-lines grid-cols-4 grid-rows-2 gap-8 sm:grid-cols-8 text-sm
    md:text-md lg:text-lg xl:text-xl"
    >
      <div className="box">
        <img
          className="rounded-full shadow ring-yellow-400"
          src={img1}
          alt="Kalil"
        />{' '}
      </div>
      <div className="box col-span-3 m-auto shadow ring-yellow-400">
        <p>
          Cat ipsum dolor sit amet, sit in window and stare oooh, a bird, yum
          yet scratch the furniture, yet jump on counter removed by human jump
          on counter again removed by human meow before jumping on counter this
          time to let the human know am coming back but rub my belly hiss.
        </p>
      </div>

      <div className="box">
        <img
          className="rounded-full shadow ring-yellow-400"
          src={img2}
          alt="Florence"
        />
      </div>
      <div className="box col-span-3 m-auto shadow ring-yellow-400">
        <p>
          Cat ipsum dolor sit amet, sit in window and stare oooh, a bird, yum
          yet scratch the furniture, yet jump on counter removed by human jump
          on counter again removed by human meow before jumping on counter this
          time to let the human know am coming back but rub my belly hiss.
        </p>
      </div>
      <div className="box">
        <img
          className="rounded-full shadow ring-yellow-400"
          src={img3}
          alt="Bastien"
        />
      </div>
      <div className="box col-span-3 m-auto shadow ring-yellow-400">
        <p>
          Cat ipsum dolor sit amet, sit in window and stare oooh, a bird, yum
          yet scratch the furniture, yet jump on counter removed by human jump
          on counter again removed by human meow before jumping on counter this
          time to let the human know am coming back but rub my belly hiss.
        </p>
      </div>
      <div className="box">
        <img
          className="rounded-full shadow ring-yellow-400"
          src={img4}
          alt="Selena"
        />
      </div>
      <div className="box col-span-3 m-auto shadow ring-yellow-400">
        <p>
          Cat ipsum dolor sit amet, sit in window and stare oooh, a bird, yum
          yet scratch the furniture, yet jump on counter removed by human jump
          on counter again removed by human meow before jumping on counter this
          time to let the human know am coming back but rub my belly hiss.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
