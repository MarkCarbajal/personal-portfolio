import React from 'react'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects';
import About from '../components/About';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div className='wrapper'>
    <Navbar/>
    <About/>
    <Projects/>
    <Footer/>
    </div>
  )
}

export default Home