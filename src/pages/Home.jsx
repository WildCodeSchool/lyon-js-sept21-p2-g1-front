// import React, { useState, useEffect } from 'react';
import img from '../assets/parking.jpg';
import CardHome from '../components/CardHome';
import circle from '../assets/arroww.png';
import parkingD from '../assets/parkingHomeD.png';
import parkingS from '../assets/parkingHomeS.png';
import Footer from '../components/Footer';
import phoneImg from '../assets/phone.png';
import Search from '../components/Search';

function Home() {
  // const [searchInput, setSearchInput] = useState('');
  // const [validateSearch, setValidateSearch] = useState('');
  // const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   return () => {};
  // }, []);

  return (
    <>
      <div className="overflow-hidden">
        <div className="mx-20 mt-44">
          <Search />
        </div>
        <div className="w-full absolute h-screen -z-1 top-0">
          <img src={img} alt="parking" />
          <div className="secondary__color visible md:invisible bg-secondary w-full h-screen">
            <div className="primary__color invisible md:visible bg-primary w-full h-screen" />
          </div>
          <Footer />
        </div>
        <div className="phone absolute">
          <img src={phoneImg} alt={phoneImg} />
        </div>
        <div className="visible md:invisible card__Home flex flex-wrap justify-center items-center inset-x-0 top-96 absolute">
          <CardHome name="Parking surveillé" parking={parkingS} />
        </div>
        <div className="visible md:invisible card__partage flex justify-center absolute w-full -bottom-48 shadow-2xl">
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
          {/* <form
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
          </form> */}
        </div>
      </div>
    </>
  );
}

export default Home;
