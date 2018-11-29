import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className="services">
      
      <div className="title">
        <div className="title-text">
          <h1>Full Service Guarantee</h1>
        </div>
        <div className="title-underline"></div>
      </div>
        
      <div className="services-container">
        <article className="service-item service-item-black">
          <div className="front-text"><i className="fa fa-anchor"></i>
            <h1>Drydockings</h1>
          </div>
          <div className="back-text">
            <h1>DD Supervision</h1>
            <p>Our representative will at all times be in the dry-dock to monitor the on-going works and attend all key steps.</p>
            <Link to="/services/overview_drydockings" className="button" >Read More</Link>
          </div>
        </article>
        <article className="service-item service-item-white">
          <div className="front-text"><i className="fa fa-pencil-square-o"></i>
            <h1>Pre-Docking Surveys</h1>
          </div>
          <div className="back-text">
            <h1>Ship Surveys</h1>
            <p>We will make condition survey of all general areas such as main deck, mooring decks and superstructure with reporting and recommendation.</p>
            <Link to="/services/overview_preSurveys" className="button" >Read More</Link>
          </div>
        </article>
        <article className="service-item service-item-black">
          <div className="front-text"><i className="fa fa-pie-chart"></i>
            <h1>Tank Surveys</h1>
          </div>
          <div className="back-text">
            <h1>Inside Tanks</h1>
            <p>JMC upon accepting tank surveys will go ahead as per planned and take the neccessary requirements and conduct the survey.</p>
            <Link to="/services/overview_tankSurveys" className="button" >Read More</Link>
          </div>
        </article>
        <article className="service-item service-item-white">
          <div className="front-text"><i className="fa fa-line-chart"></i>
            <h1>Paint Maintenance</h1>
          </div>
          <div className="back-text">
            <h1>Paint Technology</h1>
            <p>As the leading corrosion experts in the industry, we will conduct a paint seminar for your crew during the course of the drydocking and provide you with concrete solutions.</p>
            <Link to="/services/overview_paintTechnology" className="button" >Read More</Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;