import React from "react";

const Newfooter = () => {
  return (
    <footer>
      <div className="row">
        <div className="col-6 col-md-4">
          <div className="footer-text">
            <h5>Follow Us</h5>
            <div className="footer-icons">
              <a href="https://www.facebook.com/JMC-Limited-249135151800194/">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://www.twitter.com">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://www.instagram.com">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/">
                <i className="fa fa-linkedin" />
              </a>
            </div>

            <div className="footer-info">
              <p>
                Send us an email
                <br />
                mje@jmc-limited.com
                <br />
                Give us a call
                <br />
                +45-2889-1525
              </p>
            </div>
            <div className="footer-copy">
              &copy; JMC-Limited 2019
              <div>
                <p style={{ fontSize: "10px", paddingTop: "5px" }}>
                  <a
                    href="https://brennon-borbon.netlify.com/"
                    className="footer-design"
                  >
                    Design by BmB
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Newfooter;
