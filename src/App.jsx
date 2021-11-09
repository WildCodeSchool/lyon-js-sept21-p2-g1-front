import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Rating from './pages/Rating';
import Home from './pages/Home';
import Share from './pages/Share';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rating" component={Rating} />
        <Route path="/share" component={Share} />
        <Route path="/aboutUs" component={AboutUs} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
