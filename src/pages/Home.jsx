/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import { Input } from 'semantic-ui-react';
import React, { useState, useEffect } from 'react';
import img from '../assets/parking.jpg';
import Footer from '../components/Footer';
import CardHome from '../components/CardHome';
import SecondaryColor from '../components/BackgroundColors';
import circle from '../assets/arroww.png';
import parkingD from '../assets/parkingHomeD.png';
import parkingS from '../assets/parkingHomeS.png';

function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [validateSearch, setValidateSearch] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        <div className="visible md:invisible card__Home flex flex-wrap justify-center items-center inset-x-0 top-96 absolute">
          <CardHome name="Parking surveillé" parking={parkingS} />
        </div>
        <div className="visible md:invisible card__partage flex justify-center absolute w-full bottom-10">
          <img
            className="-my-6 absolute cursor-pointer"
            src={circle}
            alt="circle"
          />
          <img
            className="top-96 -my-5 absolute cursor-pointer"
            src={circle}
            alt="circle"
          />

          <CardHome name="Stationnement partagés" parking={parkingD} />
        </div>

        <div className="absolute right-10 left-10 top-28">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setValidateSearch(searchInput);
            }}
          >
            <Input
              fluid
              icon="search"
              placeholder="Search..."
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </form>
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
