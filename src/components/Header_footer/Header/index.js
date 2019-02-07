import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../Resources/img/logo.jpg';

 class Header extends Component {
 
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark px-5">
        
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="company logo" width="40" height="35" /> JMC-Limited
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item ">
              <Link to="/about_us" className="nav-link">About</Link>
            </li>
            
            <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" to="/services" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Services
      </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/services">Go To Services</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/services/overview_drydockings">Drydockings</Link>
          <Link className="dropdown-item" to="/services/overview_preSurveys">Pre Surveys</Link>
          <Link className="dropdown-item" to="/services/overview_paintTechnology">Paint Technology</Link>
          <Link className="dropdown-item" to="/services/overview_tankSurveys">Tank Surveys</Link>
          <Link className="dropdown-item" to="/services/overview_newBuildings">New Buildings</Link>
          <Link className="dropdown-item" to="/services/overview_consulting">Consulting</Link>
        </div>
      </li>
            
            <li className="nav-item ">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item ">
              <Link to="/report" className="nav-link">Report</Link>
            </li>
            <li className="nav-item "><Link to="/blog" className="nav-link">Blog</Link></li>
          </ul>
          <div className="d-none d-lg-flex align-items-baseline">
            <p className="text-white mx-4">
              <span className="mx-2 phone-icon">
                <i className="fas fa fa-phone fa-fw"></i>
              </span>
              +45-2889-1525
            </p>
            <Link to="/contact" className="btn btn-outline-warning btn-lg">Contact Us</Link> 
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
