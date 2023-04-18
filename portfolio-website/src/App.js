import Navbar from './components/Navbar';
import './App.css';
import Projects from './components/Projects';
import About from './components/About';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
    <Navbar/>
    <About/>
    <Projects/>
    <Social/>
    <Footer/>
    </div>
  );
}

export default App;
