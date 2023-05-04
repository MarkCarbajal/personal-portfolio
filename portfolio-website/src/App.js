import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Social from './components/Social';
import Footer from './components/Footer';
import TechGrid from './components/TechGrid';
import Song from './components/Song';
import Discord from './components/Discord';

function App() {
  return (
    <div className='wrapper'>
      <Navbar/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
