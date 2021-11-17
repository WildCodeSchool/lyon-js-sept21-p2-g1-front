import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_without_background.png';

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="hidden md:flex">
          <img src={logo} alt="Logo" />
        </div>
        <div className="test flex justify-center">
          <ul className="flex items-center justify-arround sm: md:flex ">
            <li className="text-md md:text-2xl">
              <Link to="/">Acceuil</Link>
            </li>
            <li className="text-md">
              <Link to="/share">Partage</Link>
            </li>
            <li className="text-md">
              <Link to="/rating">Avis</Link>
            </li>
            <li className="text-md">
              <Link to="/map">Carte</Link>
            </li>
            <li className="text-md">
              <Link to="/aboutUs">A propos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
