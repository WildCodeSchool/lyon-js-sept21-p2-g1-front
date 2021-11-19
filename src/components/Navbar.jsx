import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_without_background.png';

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center z-10 pt-5">
      <div className="flex justify-center items-center">
        <div className="hidden md:flex">
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <ul className="w-full m-966 ml-0 justify-self-start flex mr-12 m md:flex-row md:m-auto md:pl-0">
            <li className="text-xl md:text-2xl">
              <Link to="/">Accueil</Link>
            </li>
            <li className="text-xl font-bold md:text-lg">
              <Link to="/share">Partage</Link>
            </li>
            <li className="text-xl font-bold md:text-lg">
              <Link to="/rating">Avis</Link>
            </li>
            <li className="text-xl font-bold md:text-lg">
              <Link to="/map">Carte</Link>
            </li>
            <li className="text-xl font-bold md:text-lg">
              <Link to="/aboutUs">A propos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
