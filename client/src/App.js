import Navbar from './components/Nav/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Signup from './components/Signup/Signup.jsx'
import Login from './components/Login/Login.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
