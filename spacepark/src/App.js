import './App.css';
import Btn from './components/Button';
import Msg from './components/Message';

function App() {
  return (
    <div className="App">
        <div className="container ">

          <h1 className="text-center text-2xl flex justify-end">
            
            Coucou 
            
            </h1>
            <Btn />
            <Msg />

        </div>
    </div>
  );
}

export default App;
