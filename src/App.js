import './App.css';

// Components
import Header from './components/Header/Header';
import Description from './components/Description/Description';
import Creations from './components/Creations/Creations';

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Creations />
    </div>
  );
}

export default App;
