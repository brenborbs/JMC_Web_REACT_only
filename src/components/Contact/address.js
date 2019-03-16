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
            <p>Monday - Friday, 24:00 hrs.</p>
          </div>
        </div>
      </div>
        
      <div className="contact-form">
        <h3>contact us</h3>
        <article >
      <img src={Mart} alt="img" />
        <h2>Martin Jennet</h2>
        <h5>Owner</h5>
          <div>
            <h5 style={{ fontSize: '18px'}} ><i className="fas fa-envelope"></i> mje@jmc-limited.com</h5>
        </div>  
      </article> 
        
        </div>  
      </div>
    </div>

  );
};

export default Address;