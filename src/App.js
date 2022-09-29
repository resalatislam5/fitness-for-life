import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Sideber from './components/Sideber/Sideber';
import Work from './Work/Work';

function App() {
  return (
    <div className='App'>
        <div>
        <Header></Header> 
        <Work></Work>
        </div>
        <div>
            <Sideber></Sideber>
        </div>
    </div>
  );
}

export default App;
