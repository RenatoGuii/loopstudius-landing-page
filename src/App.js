import './App.css';

// Components
import Header from './components/Header/Header';
import Description from './components/Description/Description';
import Creations from './components/Creations/Creations';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Creations />
      <Footer />
    </div>
  );
}

export default App;
