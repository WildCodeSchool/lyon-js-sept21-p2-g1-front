import React from 'react';
import img from '../assets/parking.png';
import Orange from '../components/Orange';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="backround__Header bg-cover w-full absolute -z-1 top-0">
      <img src={img} alt="parking" />
      <Orange />
      <Footer />
    </div>
  );
}

export default Home;
