import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Social from './components/Social';
import Footer from './components/Footer';
import TechGrid from './components/TechGrid';
import Song from './components/Song';

function App() {
  return (
    <div className='wrapper'>
      <Navbar/>
      <About/>
      <Song/>
      <TechGrid/>
      <Projects/>
      <Social/>
      <Footer/>
      
    </div>
  );
}

export default App;
