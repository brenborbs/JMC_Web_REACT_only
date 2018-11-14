import React from 'react';
import Mart from '../../Resources/img/martin.png';

const Address = () => {
  return (
    <div className="contact">
    <div className="contact-center">
      <div className="contact-info">
        
        <div className="contact-detail">
          <div className="contact-icon"><i className="fa fa-home"></i>
          </div>

          <div className="contact-text">
            <h3>Our Location</h3>
            <p>Heimdalsvej 9</p>
            <p>DK-9900 Frederikshavn</p>
            <p>Denmark</p>
          </div>
        </div>

        <div className="contact-detail">
          <div className="contact-icon"><i className="fa fa-phone"></i>
          </div>

          <div className="contact-text">
            <h3>Give Us A Call</h3>
            <p>Martin Leif Jennet</p>
            <p>+45 - 2889 - 1525</p>
            <p>Mon - Fri, 8.00 a.m - 22.00 p.m</p>
          </div>
        </div>
      </div>
      
      <div className="contact-form">
        <h3>contact us</h3>
        <article >
      <img src={Mart} alt="img" />
        <h2>Martin Jennet</h2>
        <h5>Owner</h5>
        <hr />
        <p>Guarantee Surveys</p><p>Pre-Dry Docking Surveys</p><p>Dry Docking Supervision</p><p>On-Board Tutoring</p><p>Claims Support</p>
          <div>
            <h5 style={{ fontSize: '18px'}} >Email: mje@jmc-limited.com</h5>
        </div>  
      </article> 
        
        </div>  
      </div>
    </div>

  );
};

export default Address;