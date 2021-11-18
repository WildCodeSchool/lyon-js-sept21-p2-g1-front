import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import ApiRating from './pages/ApiRating';
import Home from './pages/Home';
import Share from './pages/Share';
import Map from './pages/Map';

import { LoadMapsContextProvider } from './contexts/LoadingMapsContext';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="relative">
      <LoadMapsContextProvider>
        <div className="navbar invisible md:visible absolute flex left-10 ">
          <Navbar />
        </div>
        {/* Hamburger Navigation */}
        <div className="hamurgerOpen visible flex md:invisible absolute cursor-pointer left-10 top-5 ">
          <Hamburger color="white" rounded toggled={isOpen} toggle={setOpen} />
          {isOpen && <Navbar />}
        </div>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/rating" component={ApiRating} />
            <Route path="/share" component={Share} />
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/map" component={Map} />
          </Switch>
        </main>
        <Footer />
      </LoadMapsContextProvider>
    </div>
  );
}

export default App;
