import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_without_background.png';

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center z-10 pt-5">
      <div className="flex justify-center items-center">
        <a href="https://lyon-js-sept21-p2-g1-front.comicscrip.duckdns.org/">
          <div className="hidden md:flex p-4">
            <img src={logo} alt="Logo" />
          </div>
        </a>
        <div>
          <ul className="flex flex-row justify-center rounded-xl -mt-20 bg-gray-900 bg-opacity-10 pb-10  md: w-full m-966 ml-0 justify-self-start flex mr-12 m">
            <li className="text-xl md:text-2xl">
              <Link to="/">Accueil</Link>
            </li>
            <li className="text-xl font-bold md:text-2xl ml-5">
              <Link to="/share">Partage</Link>
            </li>
            <li className="text-xl font-bold md:text-2xl ml-5">
              <Link to="/rating">Avis</Link>
            </li>
            <li className="text-xl font-bold md:text-2xl ml-5">
              <Link to="/map">Carte</Link>
            </li>
            <li className="text-xl font-bold md:text-2xl ml-5">
              <Link to="/aboutUs">A propos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
