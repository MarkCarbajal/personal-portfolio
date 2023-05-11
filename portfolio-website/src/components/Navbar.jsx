import React from 'react';
import { BrowserRouter as Router, Route, Link, Outlet, Routes } from 'react-router-dom';
import '../assets/css/styles.css';
import 'aos/dist/aos.css';
import useAOS from '../utils/useAOS';

const Navbar = () => {
useAOS();

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
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/contact-me" className="nav-item">Contact Me</Link>
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
