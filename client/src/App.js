import Navbar from './components/Nav/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Home />
    </div>
  );
}

export default App;
