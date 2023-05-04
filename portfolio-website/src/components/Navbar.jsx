import React, { useEffect } from 'react';
import '../assets/css/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <nav className="nav container void-background" data-aos="fade-down">
      <div className="nav-left">
        <a href="https://github.com/MarkCarbajal" className="nav-item">
          <span className="icon">
            <i className="fa fa-github"></i>
          </span>
        </a>
        <a href="https://www.linkedin.com/in/markcarbajal024/" className="nav-item">
          <span className="icon">
            <i className="fa fa-linkedin"></i>
          </span>
        </a>
      </div>

      <div className="nav-right nav-menu">
        <a className="nav-item" href="#about">About</a>
        <a className="nav-item" href="#projects">Projects</a>
        <a className="nav-item" href="#social">Social</a>
      </div>

      <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </nav>
  );
};

export default Navbar;
