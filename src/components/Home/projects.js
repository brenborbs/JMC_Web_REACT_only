import React from 'react';
import ImageOne from '../../Resources/img/tank.jpeg';
import ImageTwo from '../../Resources/img/p3.jpg';
import ImageThree from '../../Resources/img/p4.jpg';

const Projects = () => {

  const project = [
    {
      img: ImageOne,
      name: 'AIDAaura',
      desc: 'Tank Repair',
      date: 'August 18, 2018',
    },
    {
      img: ImageTwo,
      name: 'AIDAstella',
      desc: 'Dry Dock in Dubai',
      date: 'March 3, 2018',
    },
    {
      img: ImageThree,
      name: 'AIDAbella',
      desc: 'Dry Dock in Marseille',
      date: 'April 18, 2018',
    },
  ]

  const generateProjects = () => (
    project.map(( item ,i) => (
      <div key={i}>
        <article className="projects-item">
          <img src={item.img} alt="One" />
          <div className="img-text">
            <h1>{item.name}</h1>
            <h6>{item.desc}</h6>
          </div>
          <div className="img-footer">
            <div className="footer-icon">
            </div>
            <div className="footer-date">
            {item.date} 
            </div>
          </div>
        </article>
      </div>
    ))
  )

  return (
      <section className="projects">
      <div className="title">
        <div className="title-text">
          <h1>Projects</h1>
        </div>
        <div className="title-underline"></div>
      </div>
      <div className="projects-container">
        {generateProjects()}
      </div>
    </section>
  );
};

export default Projects;