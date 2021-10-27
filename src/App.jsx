import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Rating from './pages/Rating';
import Home from './pages/Home';
import Share from './pages/Share';
import Footer from './components/Footer';
import Orange from './components/Orange';

function App() {
  return (
    <div>
      <header className="flex flex-col h-screen">
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/rating" component={Rating} />
          <Route path="/share" component={Share} />
          <Route path="/about" component={AboutUs} />
        </Switch>
        <Orange />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
