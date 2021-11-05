import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="flex justify-start mx-5 p-5 space-x-4">
          <li>
            <Link exact to="/">
              Acceuil
            </Link>
          </li>
          <li>
            <Link to="/share">Partage</Link>
          </li>

          <li>
            <Link to="/aboutUs">A propos</Link>
          </li>

          <li>
            <Link to="/rating">Avis</Link>
          </li>
          <li>
            <Link to="/map">Carte</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
