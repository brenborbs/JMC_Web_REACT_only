import React from 'react';
import Logo from '../../../Resources/img/logo.jpg';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer>
    
    <div className="row">
         <div className="col-12 col-md">
            <div className="footer-img-wrapper">
           <Link to="/"><img src={Logo} alt="jmc logo" width="50px" height="50px" /></Link> 
            <small className="d-block mb-3 text-muted">&copy; 2019</small>
            </div>
        </div> 
        <div className="col-6 col-md">
          <h5>Home</h5>
          <ul className="list-unstyled text-small">
            <li><Link className="text-muted" to="/">Explore</Link></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
          <li><Link className="text-muted" to="/about_us">Company</Link></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Services</h5>
          <ul className="list-unstyled text-small">
          <li><Link className="text-muted" to="/services">Cases</Link></li>
          <li><Link className="text-muted" to="/services">Our Services</Link></li>
          <li><Link className="text-muted" to="/services/overview_drydockings">Drydockings</Link></li>
          <li><Link className="text-muted" to="/services/overview_preSurveys">Pre-Surveys</Link></li>
          <li><Link className="text-muted" to="/services/overview_paintTechnology">Paint Technology</Link></li>
          <li><Link className="text-muted" to="/services/overview_tankSurveys">Tank Surveys</Link></li>
          <li><Link className="text-muted" to="/services/overview_newBuildings">New Buildings</Link></li>
          <li><Link className="text-muted" to="/services/overview_consulting">Consulting</Link></li>
          <li><Link className="text-muted" to="/services/overview_in-service">In Service</Link></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Contact</h5>
          <ul className="list-unstyled text-small">
          <li><Link className="text-muted" to="/contact">Solutions</Link></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Report</h5>
          <ul className="list-unstyled text-small">
          <li><Link className="text-muted" to="/report">Sample Reports</Link></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Blogs</h5>
          <ul className="list-unstyled text-small">
          <li><Link className="text-muted" to="/blog">Blog Page</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-icons">
      <a href="https://www.facebook.com/JMC-Limited-249135151800194/"><i className="fa fa-facebook"></i></a>
      <a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
      <a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a>
      <a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a>
    </div>
    </footer>
  );
};

export default Footer;