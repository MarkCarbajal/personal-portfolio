import React from 'react';
import '../assets/css/styles.css';

const Navbar = () => {
  return (
    <nav className="nav container void-background">
      <div className="nav-left">
        <a href="https://github.com/MarkCarbajal" className="nav-item">
          <span className="icon">
            <i className="fa fa-github"></i>
          </span>
        </a>
        <a href="" className="nav-item">
          <span className="icon">
            <i className="fa fa-twitter"></i>
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
  )
}

export default Navbar;
