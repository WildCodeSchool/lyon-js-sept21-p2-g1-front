import { Input } from 'semantic-ui-react';
import React from 'react';
import img from '../assets/parking.jpg';
import Orange from '../components/Orange';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <div className="absolute right-10 left-10 top-28">
        <Input fluid icon="search" placeholder="Search..." />
      </div>
      <div className="w-full absolute h-screen -z-1 top-0">
        <img src={img} alt="parking" />
        <Orange />
        <Footer />
      </div>
    </>
  );
}

export default Home;
