import React from 'react';
import '../assets/css/styles.css';
import useAOS from '../utils/useAOS';

const Footer = () => {
  useAOS();
  return (
    <div>
      <div className="footer-container" data-aos="fade-up">
        <div className="line" />
        <span className="text">MARKCARB</span>
        <div className="line" />
      </div>
      <div className="sub-footer-container">
        <span>© 2023 markcarb.dev</span>
        <span style={{ color: '#767984' }}>Made by <span style={{ color: '#bfc2c7', cursor: 'pointer' }}>Mark</span></span>
      </div>
    </div>
    )
  }


export default Footer