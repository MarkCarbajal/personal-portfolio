import React from 'react';
import profileImage from '../assets/img/profile.png';

const About = () => {
  return (
    <section id="about" className="section section-1">
      <div className="container has-text-centered">
        <img className="avatar" src={profileImage} alt="Profile" />
      </div>
      <div className="container">
        <br />
        <p className="intro">
          Hello, I am Mark Carbajal. I am currently a student at California State University Fullerton pursuing a Bachelor's in Computer Science. I am a motivated aspiring Software Engineer who strives to bring creativity with a solution-driven mindset to my projects and teams. I try my best to approach my new projects with the priorities of simplicity and functionality.
        </p>
      </div>
    </section>
  );
};

export default About