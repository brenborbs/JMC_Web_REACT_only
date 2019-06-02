import React from 'react';

const Newfooter = () => {
  return (
    <footer>
      <div className="row">
          <div className="col-6 col-md-4">
            <div className="footer-text">
              <h5>Follow Us</h5>
              <div className="footer-icons">
                <a href="https://www.facebook.com/JMC-Limited-249135151800194/"><i className="fa fa-facebook"></i></a>
                <a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
                <a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a>
                <a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a>
              </div>
              
              <div className="footer-info">
                <p>Send us an email 
                  <br/> 
                  mje@jmc-limited.com
                  <br/>
                  Give us a call 
                  <br/>
                  +45-2889-1525
                </p>
              </div>
              <div className="footer-copy">
                  &copy; JMC-Limited 2019
              </div>
            </div>
          </div> 
      </div>
  </footer>
  );
};

export default Newfooter;