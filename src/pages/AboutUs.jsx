import React from 'react';
import img1 from '../assets/Pegase.JPG';
import img2 from '../assets/Cat1.jpg';
import img3 from '../assets/Cat2.jpg';
import img4 from '../assets/Cat3.jpg';

const AboutUs = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 h-80">
            <img
              className="object-center object-cover w-full h-full"
              src={img1}
              alt="Kalil"
            />{' '}
          </div>
          <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
            <p className="text-xl text-gray-700 font-bold">Bastien</p>
            <p className="text-base leading-relaxed text-gray-500 font-normal">
              Cat ipsum dolor sit amet, sit in window and stare oooh, a bird,
              yum yet scratch the furniture, yet jump on counter removed by
              human jump on counter again removed by human meow before jumping
              on counter this time to let the human know am coming back but rub
              my belly hiss.
            </p>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 h-80">
            <img
              className="object-center object-cover w-full h-full"
              src={img2}
              alt="Florence"
            />
          </div>
          <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
            <p className="text-xl text-gray-700 font-bold">Florence</p>
            <p className="text-base leading-relaxed text-gray-500 font-normal">
              Cat ipsum dolor sit amet, sit in window and stare oooh, a bird,
              yum yet scratch the furniture, yet jump on counter removed by
              human jump on counter again removed by human meow before jumping
              on counter this time to let the human know am coming back but rub
              my belly hiss.
            </p>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 h-80">
            <img
              className="object-center object-cover w-full h-full"
              src={img3}
              alt="Bastien"
            />
          </div>
          <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
            <p className="text-xl text-gray-700 font-bold">Kalil</p>
            <p className="text-base leading-relaxed text-gray-500 font-normal">
              Cat ipsum dolor sit amet, sit in window and stare oooh, a bird,
              yum yet scratch the furniture, yet jump on counter removed by
              human jump on counter again removed by human meow before jumping
              on counter this time to let the human know am coming back but rub
              my belly hiss.
            </p>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 h-80">
            <img
              className="object-center object-cover w-full h-full"
              src={img4}
              alt="Selena"
            />
          </div>
          <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
            <p className="text-xl text-gray-700 font-bold">Séléna</p>
            <p className="text-base leading-relaxed text-gray-500 font-normal">
              Cat ipsum dolor sit amet, sit in window and stare oooh, a bird,
              yum yet scratch the furniture, yet jump on counter removed by
              human jump on counter again removed by human meow before jumping
              on counter this time to let the human know am coming back but rub
              my belly hiss.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
