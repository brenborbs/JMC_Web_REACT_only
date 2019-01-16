import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../Resources/img/logo.jpg';

 class Header extends Component {

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to='/' >
      <img src={Logo} alt="jmc" width="30" height="30" className="d-inline-block align-top" /> JMC-Limited
      </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to='/about_us' className="nav-link" >About</Link>
      </li>
      <li className="nav-item">
      <Link to='/capabilities' className="nav-link" >Capabilities</Link>
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
      
      <li className="nav-item">
      <Link to='/contact' className="nav-link"  >Contact</Link>
      </li>
      <li className="nav-item">
      <Link to='/report' className="nav-link">Report</Link>
      </li>
    </ul>
    
  </div>
</nav>

    )
  }
}

export default Header;
