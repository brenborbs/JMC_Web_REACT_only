import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import Logo from '../../../Resources/img/logo.jpg';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar 
        className="navbar fixed-top navbar-expand-lg navbar-dark px-5"
        // color="light" light expand="md"
        >
          <NavbarBrand tag={Link} to="/"><img src={Logo} alt="company logo" width="58" height="50"/><strong style={{ paddingLeft: '10px' }} >JMC Limited</strong></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavItem style={{ paddingTop: '7.4px' }}>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem style={{ paddingTop: '7.4px' }}>
                <NavLink tag={Link} to="/about_us">About</NavLink> 
              </NavItem>
              <UncontrolledDropdown nav inNavbar style={{ paddingTop: '7.4px' }}>
                <DropdownToggle nav caret  >
                Services
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <Link to="/services" className="dropdown-item" >Go To Services</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <Link to="/services/overview_drydockings" className="dropdown-item" >Dry-Docking</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link className="dropdown-item" to="/services/overview_preSurveys">Pre-Docking Survey</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link className="dropdown-item" to="/services/overview_paintTechnology">Paint Technology</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link className="dropdown-item" to="/services/overview_tankSurveys">Tank Surveys</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link className="dropdown-item" to="/services/overview_newBuildings">New Buildings</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link className="dropdown-item" to="/services/overview_consulting">Consulting</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link className="dropdown-item" to="/services/overview_in-service">In-Service Repair</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link className="dropdown-item" to="/services/overview_newBuild-PaintSurvey">New-Build Paint Survey</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem style={{ paddingTop: '7.4px' }}>
                <NavLink tag={Link} to="/contact" >Contact</NavLink>
              </NavItem>
              <NavItem style={{ paddingTop: '7.4px' }}>
                <NavLink tag={Link} to="/news" >News</NavLink>
              </NavItem>
              {/* <NavItem style={{ paddingTop: '7.4px' }}>
                <NavLink tag={Link} to="/report" >Report</NavLink>
              </NavItem> */}
              <NavItem style={{ paddingTop: '7.4px' }}>
                <NavLink tag={Link} to="/blog" >Blog</NavLink>
              </NavItem>
              <NavItem className="d-none d-lg-flex align-items-baseline">
            <p className="text-white mx-2">
              {/* <span className="mx-4 phone-icon"> */}
                <i className="fas fa fa-phone fa-fw"></i>
              {/* </span> */}
              +45-28891525
            </p>
            <Link to="/contact" className="btn btn-outline-warning">Contact Us</Link> 
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
