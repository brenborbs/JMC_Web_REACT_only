import React, { Component } from 'react';
import Experties from './experties';
import Address from './address';
import Sponsor from './sponsor';

 class Contact extends Component {
  render() {
    return (
      <div>
        <Experties/>
        <Address/>
        <Sponsor />
      </div>
    )
  }
}

export default Contact;
