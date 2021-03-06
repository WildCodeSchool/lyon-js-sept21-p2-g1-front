import React from 'react';
import pardieu from '../assets/cardCity/pardieu.jpeg';
import perrache from '../assets/cardCity/perrache.jpg';
import aeroport from '../assets/cardCity/aeroport.jpeg';
import CardCityMui from '../components/CardCityMui';
import Phone from '../components/Phone';
import animHome from '../assets/animationHome.gif';
import Header from '../components/Header';

function Home() {
  return (
    <div id="fullpage">
      <Header />
      <section
        className="section active border-t-4 border-white border-b-2 flex flex-col items-center pt-20 mx-auto"
        id="section"
      >
        <div className="flex flex-col p-10 md:flex-row ">
          <div className="test flex items-center justify-center w-full">
            <img className="rounded-3xl shadow-2xl" src={animHome} alt="test" />
          </div>
          <div className="text-center flex  flex-col items-center justify-center p-10">
            <span className="text-white font-bold text-4xl md:text-7xl">
              Chercher une place dans l'agglomération Lyonnaise
            </span>
            <br />
            <br />
            <span className="text-gray-500 font-bold text-lg md:text-5xl italic">
              N'aura jamais été aussi facile avec Space Park
            </span>
          </div>
          {/* Card */}
        </div>
        {/* smartPhone */}

        <div className="phone pb-12" id="phone">
          <Phone />
        </div>

        {/* CardCity */}
        <div className="card__city_Mui grid pb-20 w-full px-10 py-10 md:py-20 md:px-20">
          <div className="cardCity grid grid-cols-1 gap-x-20 pb-14 md:grid-cols-3 gap-y-10">
            <a href="https://lyon-js-sept21-p2-g1-front.comicscrip.duckdns.org/map?search=Gare%20de%20Lyon%20Part%20-%20Dieu%2C%20Place%20Charles%20B%C3%A9raudier%2C%20Lyon%2C%20France">
              <CardCityMui
                img={pardieu}
                name="Lyon Part Dieu"
                quantity="1875 places disponibles"
              />
            </a>
            <a href="https://lyon-js-sept21-p2-g1-front.comicscrip.duckdns.org/map?search=Gare%20de%20Lyon%20Perrache%2C%20Cours%20de%20Verdun%20Gensoul%2C%20Lyon%2C%20France">
              <CardCityMui
                img={perrache}
                name="Lyon Perrache"
                quantity="1300 places disponibles"
              />
            </a>
            <a href="https://lyon-js-sept21-p2-g1-front.comicscrip.duckdns.org/map?search=Lyon%20Saint-Exup%C3%A9ry%20TGV%2C%20Colombier-Saugnieu%2C%20France">
              <CardCityMui
                img={aeroport}
                name="Aeroport St Exupery"
                quantity="7500 places disponibles"
              />
            </a>
          </div>
        </div>
      </section>
      <main className="bg-secondary md:bg-primary"> </main>
    </div>
  );
}

export default Home;
