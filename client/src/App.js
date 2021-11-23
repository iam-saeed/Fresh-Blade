import Navbar from './components/Nav/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Signup from './components/Signup/Signup.jsx'
import Login from './components/Login/Login.jsx'
import Dash from './components/ClientDash/Client_Dash.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/bookings" element={<Dash />} />
      </Routes>
    </Router>
  );
}

export default App;
