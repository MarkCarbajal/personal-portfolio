import React from 'react';
import project1Image from '../assets/img/project-1.jpg';
import project2Image from '../assets/img/project-2.jpg';
import project3Image from '../assets/img/project-3.jpg';
import project4Image from '../assets/img/project-4.jpg';
import '../assets/css/styles.css'

const Projects = () => {
  return (
        <>
      <section id="projects" className="section section-2">
        <div className="container">
          <div className="has-text-centered">
            <h3 className="title is-3">Projects and Coursework</h3>
          </div>

          <div className="columns is-multiline is-desktop">
            {/* Project 1 */}
            <div className="column">
              <div className="box project-text">
                <article>
                  <div>
                    <figure className="image project-figure">
                      <img src={project1Image} alt="Project 1" />
                    </figure>
                  </div>
                  <div>
                    <p>
                      Implemented several commands to a discord bot, Anime Discord Bot. Worked with MyAnimeList's API and Jikan's REST API to display information for user commands.
                    </p>
                  </div>
                </article>
              </div>
            </div>
            {/* Project 2 */}
            <div className="column">
              <div className="box project-text">
                <article>
                  <div>
                    <figure className="image project-figure">
                      <img src={project2Image} alt="Project 2" />
                    </figure>
                  </div>
                  <div>
                    <p>
                      Removed feature off of Uniswap's currency exchange interface and pushed changes to live website making necessary adjustments to the website.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-2">
        <div className="container">
          <div className="has-text-centered"></div>

          <div className="columns is-multiline is-desktop">
            {/* Project 3 */}
            <div className="column">
              <div className="box project-text">
                <article>
                  <div>
                    <figure className="image project-figure">
                      <img src={project3Image} alt="Project 3" />
                    </figure>
                  </div>
                  <div>
                    <p>
                      Created a C++ Program that tracks the location of a package by parsing through a text file and identifying tracking numbers while providing location updates.
                    </p>
                  </div>
                </article>
              </div>
            </div>
            {/* Project 4 */}
            <div className="column">
              <div className="box project-text">
                <article>
                  <div>
                    <figure className="image project-figure">
                      <img src={project4Image} alt="Project 4" />
                    </figure>
                  </div>
                  <div>
                    <p>
                      Bug fix on Supabase's web interface, made necessaryadjustments to remove unwanted elements from the UI that were no longer relevant.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
  )
}

export default Projects
