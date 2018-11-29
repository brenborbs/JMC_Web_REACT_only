import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../Resources/img/logo.jpg';

 class Header extends Component {

  
  
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar__Link Navbar__Link-brand">
          <img className="jmc_log" src={Logo} alt="jmc_logo" height="30" width="30"  />
        </div>
        <nav className="Navbar__Items">
        <div className="Navbar__Link">
        <Link to='/'>Home</Link>
        <Link to='/about_us'>About</Link>
        <Link to='/services'>Services</Link>
        <Link to='/contact'>Contact</Link>
        </div>
        </nav>
        
        <nav className="Navbar__Items Navbar__Items--center">
        <div className="Navbar__Link">
        {/* {this.showLinks(this.state.user)} */}
        <Link className="link-sample" to='/report'>Report</Link>
        </div>
      </nav>
      </div> 

    )
  }
}

export default Header;
