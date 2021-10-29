import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Rating from './pages/Rating';
import Home from './pages/Home';
import Share from './pages/Share';
import SearchMap from './pages/SearchMap';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact="true" path="/" component={Home} />
          <Route path="/rating" component={Rating} />
          <Route path="/searchMap" component={SearchMap} />
          <Route path="/share" component={Share} />
          <Route path="/aboutus" component={AboutUs} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
