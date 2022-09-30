import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sideber from './components/Sideber/Sideber';
import Work from './Work/Work';

function App() {
  return (
    <div>
        <div className='App'>
        <div>
        <Header></Header> 
        <Work></Work>
        </div>
        <div>
            <Sideber></Sideber>
        </div>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
