import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faCode,
  faStar,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';
import '../assets/css/styles.css';
import useAOS from '../utils/useAOS';

const Projects = () => {
  useAOS();

  const repositories = [
    {
      title: 'Personal Portfolio',
      description: 'This is my personal portfolio created with ReactJS, and deployed with Vercel.',
      url: 'https://github.com/MarkCarbajal/personal-portfolio',
    },
    {
      title: 'Worlde Rest API',
      description: 'Wordle Rest API made with python, using Flask, Redis, Sqlite3, Nginx. ',
      url: 'https://github.com/MarkCarbajal/CPSC449-Project-4',
    },
    {
      title: 'Anime Bot',
      description: 'Created a discord anime bot using SQL and python to diplay queried animes',
      url: 'https://example.com/anime-bot',
    },
    {
      title: 'Space Invaders',
      description: 'Created a space invaders clone with custom sprites and sound effects. Developed with pygame',
      url: 'https://github.com/MarkCarbajal/SpaceInvaders',
    },
    // Add more repositories as needed
  ];

  return (
    <div className="fix-div-aos-pos" data-aos="fade-left">
      <div className="title-container">
        <h1 className="background-title">Projects</h1>
        <h1 className="intro-title-smaller">Projects</h1>
      </div>

      <div className="projects-container">
        {repositories.map((repo, index) => (
          <a key={index} href={repo.url} target="_blank" rel="noopener noreferrer" className="project-link">
            <div className="project">
              <div className="project-header">
                <h3 className="project-title">{repo.title}</h3>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
              <p className="project-description">{repo.description}</p>
              <div className="project-stats">
                <FontAwesomeIcon icon={faCode}/> 
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faCodeBranch} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
