import React from 'react';
import { BrowserRouter as Router, Route, Link, Outlet, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;
