import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Rating from './pages/Rating';
import Home from './pages/Home';
import Share from './pages/Share';
import Map from './pages/Map';
import { LoadMapsContextProvider } from './contexts/LoadingMapsContext';

function App() {
  return (
    <div>
      <LoadMapsContextProvider>
        <header className="bg-black">
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/rating" component={Rating} />
            <Route path="/share" component={Share} />
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/map" component={Map} />
          </Switch>
        </main>
        <footer> </footer>
      </LoadMapsContextProvider>
    </div>
  );
}

export default App;
