import React from 'react';
import img1 from '../assets/Cat1.png';
import img2 from '../assets/Cat2.png';
import img3 from '../assets/Cat3.png';
import img4 from '../assets/Cat4.png';

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="table w-full">
        <div className="table-row-group">
          <div className="table-row">
            {' '}
            <img
              className="table-cell w-40 h-40 ml-20"
              src={img1}
              alt="Kalil"
            />{' '}
            <p className="table-cell">
              {' '}
              Cat ipsum dolor sit amet, sit in window and stare oooh, a bird,
              yum yet scratch the furniture, yet jump on counter removed by
              human jump on counter again removed by human meow before jumping
              on counter this time to let the human know am coming back but rub
              my belly hiss.{' '}
            </p>
          </div>
        </div>
      </div>

      <div className="table w-full">
        <div className="table-row-group">
          <div className="table-row">
            {' '}
            <img
              className="table-cell w-40 h-40 ml-20"
              src={img2}
              alt="Florence"
            />{' '}
            <p className="table-cell">
              {' '}
              Cat ipsum dolor sit amet, sit in window and stare oooh, a bird,
              yum yet scratch the furniture, yet jump on counter removed by
              human jump on counter again removed by human meow before jumping
              on counter this time to let the human know am coming back but rub
              my belly hiss.{' '}
            </p>
          </div>
        </div>
      </div>

      <div className="table w-full">
        <div className="table-row-group">
          <div className="table-row">
            <img
              className="table-cell w-40 h-40 ml-20"
              src={img3}
              alt="Bastien"
            />{' '}
            <p className="table-cell">
              {' '}
              Cat ipsum dolor sit amet, sit in window and stare oooh, a bird,
              yum yet scratch the furniture, yet jump on counter removed by
              human jump on counter again removed by human meow before jumping
              on counter this time to let the human know am coming back but rub
              my belly hiss.{' '}
            </p>
          </div>
        </div>
      </div>

      <div className="table w-full">
        <div className="table-row-group">
          <div className="table-row">
            <img
              className="table-cell w-40 h-40 ml-20"
              src={img4}
              alt="Selena"
            />{' '}
            <p className="table-cell">
              {' '}
              Cat ipsum dolor sit amet, sit in window and stare oooh, a bird,
              yum yet scratch the furniture, yet jump on counter removed by
              human jump on counter again removed by human meow before jumping
              on counter this time to let the human know am coming back but rub
              my belly hiss.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
