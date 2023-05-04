import React, {useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJs, faReact, faNodeJs, faFantasyFlightGames, faDev, faConnectdevelop, faHtml5, faCss3Alt, faDocker, faGitAlt, faJava } from '@fortawesome/free-brands-svg-icons';
import '../assets/css/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const TechGrid = () => {
  const techs = [
    { name: 'Python', icon: faPython },
    { name: 'JavaScript', icon: faJs },
    { name: 'TypeScript', icon: faJs },
    { name: 'React', icon: faReact }, 
    { name: 'Node.js', icon: faNodeJs },
    { name: 'HTML5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss3Alt },
    { name: 'Docker', icon: faDocker },
    { name: 'Git', icon: faGitAlt },
    { name: 'C++', icon: faDev },
    { name: 'Quart', icon: faConnectdevelop },
    { name: 'Unreal Engine', icon: faFantasyFlightGames}



  ];

  
  return (
    <div className="tech-grid">
      {techs.map((tech, index) => (
        <div key={index} className="tech-item">
          <FontAwesomeIcon icon={tech.icon} size="2x" />
          <p>{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechGrid;
