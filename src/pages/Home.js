import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-red">
      <ul>
        <li>
          <Link exact to="/">
            Acceuil
          </Link>
        </li>
        <li>
          <Link to="/AboutUs">AbousUs</Link>
        </li>
        <li>
          <Link to="/Share">Partage</Link>
        </li>
        <li>
          <Link to="/Avis">Avis</Link>
        </li>
        <li>
          <Link to="/SearchMap">SearchMap</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
