import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import ApiRating from './pages/ApiRating';
import Home from './pages/Home';
import Share from './pages/Share';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ApiRating" component={ApiRating} />
          <Route path="/share" component={Share} />
          <Route path="/about" component={AboutUs} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
