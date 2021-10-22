import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link exact to="/">
            Acceuil
          </Link>
        </li>
        <li>
          <Link to="/searchMap">Carte</Link>
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
      </ul>
    </nav>
  );
};

export default Navbar;
