import './App.css';
import Header from './components/Header/Header';
import Sideber from './components/Sideber/Sideber';

function App() {
  return (
    <div className='App'>
        <div>
        <Header></Header>  
        </div>
        <div>
            <Sideber></Sideber>
        </div>
    </div>
  );
}

export default App;
