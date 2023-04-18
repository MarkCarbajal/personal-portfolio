import React from 'react';
import linkedinIcon from '../assets/img/linkedin.png';
import facebookIcon from '../assets/img/facebook.png';

const Social = () => {
  return (

  <section id="social" className="section section-3">
  <div className="container">
    <div className="has-text-centered">
      <h3 className="title is-3">Let's Connect</h3>
    </div>
    <div className="social-container columns">
      <div className="column is-6 has-text-centered">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mark-carbajal-197103218/">
          <img className="" src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
      <div className="column is-6 has-text-centered">
        <a target="_blank" rel="noopener noreferrer" href="">
          <img className="" src={facebookIcon} alt="Facebook" />
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Social