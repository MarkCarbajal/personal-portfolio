import React from 'react';
import '../assets/css/styles.css';
import Song from './Song';

const Navbar = () => {
  return (
    <nav className="nav container void-background">
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
      <Song/>
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
  )
}

export default Navbar;
