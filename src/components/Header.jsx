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
        {/* <Search /> */}
        <div className="searchBar focus:outline-none focus:ring focus:border-yellow-500  absolute top-64 w-screen">
          {isLoaded && <Search />}
        </div>
      </div>
    </header>
  );
}

export default Header;
