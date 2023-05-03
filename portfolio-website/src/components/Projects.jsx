import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faCode,
  faStar,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';
import '../assets/css/styles.css';

const Projects = () => {
  const repositories = [
    {
      title: 'Repo 1',
      description: 'This is a description for Repo 1',
    },
    {
      title: 'Repo 2',
      description: 'This is a description for Repo 2',
    },
    {
      title: 'Repo 2',
      description: 'This is a description for Repo 2',
    },
    // Add more repositories as needed
  ];

  return (
    
    <div>
       <div className="title-container">
        <h1 className="background-title">Projects</h1>
        <h1 className="intro-title-smaller">Projects</h1>
      </div>

      <div className="projects-container">
        {repositories.map((repo, index) => (
          <div key={index} className="project">
            <div className="project-header">
              <h3 className="project-title">{repo.title}</h3>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
            <p className="project-description">{repo.description}</p>
            <div className="project-stats">
              <FontAwesomeIcon icon={faCode} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faCodeBranch} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;