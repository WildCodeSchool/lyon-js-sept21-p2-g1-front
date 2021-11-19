import React, { useContext } from 'react';
import img from '../assets/parking.jpg';
import { Search } from './Maps';
import LoadingMapsContext from '../contexts/LoadingMapsContext';

function Header() {
  const { isLoaded } = useContext(LoadingMapsContext);

  return (
    <header>
      <div className="container">
        <div className="background w-screen h-full ">
          <img id="background" src={img} alt="parking" />
        </div>
        <div className="searchBarflex items-center justify-center mx-auto absolute top-52 w-screen">
          {/* <Search /> */}
          {isLoaded && <Search />}
        </div>
      </div>
    </header>
  );
}

export default Header;
