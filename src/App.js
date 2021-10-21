import { Switch, Route } from 'react-dom';
import AboutUs from './pages/AboutUs';
import Avis from './pages/Avis';
import Home from './pages/Home';
import Share from './pages/Share';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Avis" component={Avis} />
        <Route path="/Share" component={Share} />
        <Route path="/About" component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
