/* eslint-disable no-unused-vars */
import { Input } from 'semantic-ui-react';
import React from 'react';
import img from '../assets/parking.jpg';
import Footer from '../components/Footer';
import CardHome from '../components/CardHome';
import SecondaryColor from '../components/BackgroundColors';
import circle from '../assets/circle.svg';

function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="visible md:invisible card__Home flex flex-wrap justify-center items-center inset-x-0 top-96 absolute">
          <CardHome name="Parking surveillé" />
        </div>
        <img src={circle} alt="circle" />
        <div className="visible md:invisible card__partage flex justify-center absolute w-full bottom-10">
          <CardHome name="Stationnement partagés" />
        </div>
        <div className="absolute right-10 left-10 top-28">
          <Input fluid icon="search" placeholder="Search..." />
        </div>
        <div className="w-full absolute h-screen -z-1 top-0">
          <img src={img} alt="parking" />
          <SecondaryColor />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
