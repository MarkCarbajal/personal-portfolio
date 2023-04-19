import React from 'react';
//import profileImage from '../assets/img/profile.png'
import '../assets/css/styles.css';

const About = () => {
  return (
    <section id="about" className="section section-1">
      {/*<div className="container has-text-centered">
        <img className="avatar" src={profileImage} alt="Profile" />
        </div>*/
      }
      <div className="container">
        <br />
        <h1 className='intro-title'>Hello, I'm Mark 👋</h1>
        <p className="intro">
        Hello, I'm currently a 21 year old student enrolled at California State University Fullerton. 
        I am in my 4th year of university, pursuing a Bachelors in Science in Computer Science with an 
        expected graduation date of Dec 2023.
        </p>
        <h1 className='intro-title-smaller'> About Me 💭</h1>
        <p className='intro'>
         I've always been quite passionate about technology, for me what really sparked my interest was
         video games at a young age. I am currently an aspiring software, currently focused on gaining more experience building
         web applications, front and backend, and also mobile application programming. I am also learning more about
         embedded programming and AI & ML. 
         <br/>
         <br/>
         Besides programming, Im a huge fan of sports, especially basketball. I am also a big car enthusiast
         and love weightlifting and cycling to keep myself active. 
        </p>
        <h1 className='intro-title-smaller'> Technologies 💻</h1>
        <p className='intro'>
        I use a variety of tools to streamline my development process and increase the quality of both my code, 
        and my projects. Below is a list of technologies and languages I've had experience with in the past, or
        use currently.
        </p>
      </div>
    </section>
  );
};

export default About