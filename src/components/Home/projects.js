import React from 'react';
import ImageOne from '../../Resources/img/tank.jpeg';
import ImageTwo from '../../Resources/img/p3.jpg';
import ImageThree from '../../Resources/img/p4.jpg';

const Projects = () => {
  return (
    
      <section className="projects">
      
      <div className="title">
        <div className="title-text">
          <h1>Projects</h1>
        </div>
        <div className="title-underline"></div>
      </div>
      
      <div className="projects-container">
        
        <article className="projects-item">
          <img src={ImageOne} alt="One" />
          <div className="img-text">
            <h1>AIDAaura</h1>
            <h6>Tank Repair</h6>
          </div>
          <div className="img-footer">
            <div className="footer-icon">
            </div>
            <div className="footer-date">
            August 18, 2018 
            </div>
          </div>
        </article>
        
        <article className="projects-item">
          <img src={ImageTwo} alt="Two"/>
          <div className="img-text">
            <h1>AIDAstella</h1>
            <h6>Dry Dock in Dubai</h6>
          </div>
          <div className="img-footer">
            <div className="footer-icon">
            </div>
            <div className="footer-date">
              March 3, 2018
            </div>
          </div>
        </article>
        
        <article className="projects-item">
          <img src={ImageThree} alt="Three"  
          />
          <div className="img-text">
            <h1>AIDAbella</h1>
            <h6>Dry Dock in Marseille</h6>
          </div>
          <div className="img-footer">
            <div className="footer-icon">
            </div>
            <div className="footer-date">
              April 18, 2018
            </div>
          </div>
        </article>
        
      </div>
    </section>

  );
};

export default Projects;