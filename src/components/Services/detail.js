import React from 'react';
import {Link } from 'react-router-dom';
import PhotQ from '../../Resources/img/dd.JPG';
import PhotW from '../../Resources/img/dft.JPG';
import PhotE from '../../Resources/img/bar.JPG';
import PhotR from '../../Resources/img/tank1.JPG';
import PhotT from '../../Resources/img/fore.JPG';
import PhotY from '../../Resources/img/expd.JPG';

const Detail = () => {
  return (
    <div>
      <section className="portfolio">
    
    <div className="title">
      <h1 className="title-text">Explore Our Services</h1>
      <div className="title-underline"></div>
    </div>
    
    <div className="portfolio-center">
      
      <article className="work">
        <img src={PhotQ} className="img-box" alt="seq" />
        <div className="image-overlay">
          <div className="image-text">
            <h3>Dry Dockings</h3>
            <p>On all shipyards globally</p>
          </div>
          <div className="image-icon">
            <Link to="/services/overview_drydockings"><i className="fa fa-arrow-right" ></i></Link>
          </div>
        </div>

      </article>
      
      <article className="work">
        <img src={PhotW} className="img-box" alt="sew" />
        <div className="image-overlay">
          <div className="image-text">
            <h3>Pre-Surveys</h3>
            <p>On board each ship</p>
          </div>
          <div className="image-icon">
          <Link to="/services/overview_preSurveys"><i className="fa fa-arrow-right" ></i></Link>
          </div>
        </div>

      </article>
      
      <article className="work">
        <img src={PhotE} className="img-box" alt="see" />
        <div className="image-overlay">
          <div className="image-text">
            <h3>Paint Technology</h3>
            <p>On each ship/office</p>
          </div>
          <div className="image-icon">
          <Link to="/services/overview_paintTechnology"><i className="fa fa-arrow-right" ></i></Link>
          </div>
        </div>

      </article>
      
      <article className="work">
        <img src={PhotR} className="img-box" alt="ser" />
        <div className="image-overlay">
          <div className="image-text">
            <h3>Tank Surveys</h3>
            <p>On each vessel</p>
          </div>
          <div className="image-icon">
          <Link to="/services/overview_tankSurveys"><i className="fa fa-arrow-right" ></i></Link>
          </div>
        </div>

      </article>
      
      <article className="work">
        <img src={PhotT} className="img-box" alt="set" />
        <div className="image-overlay">
          <div className="image-text">
            <h3>New Buildings</h3>
            <p>On all shipyards globally</p>
          </div>
          <div className="image-icon">
          <Link to="/services/overview_newBuildings"><i className="fa fa-arrow-right" ></i></Link>
          </div>
        </div>

      </article>
      
      <article className="work">
        <img src={PhotY} className="img-box" alt="sey" />
        <div className="image-overlay">
          <div className="image-text">
            <h3>Consulting</h3>
            <p>On each ship/office</p>
          </div>
          <div className="image-icon">
          <Link to="/services/overview_consulting"><i className="fa fa-arrow-right" ></i></Link>
          </div>
        </div>

      </article>
      

    </div>




    <div className="section-btn">
    <Link to="/contact" >Contact Us</Link>
    </div>
  </section>
    </div>
  );
};

export default Detail;