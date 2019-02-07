import React from 'react';
import Diag from '../../Resources/img/jmc_diag.png';
import Bren from '../../Resources/img/brennon.JPG';
import Mart from '../../Resources/img/martin.png';
import Olek from '../../Resources/img/olekA.png';
// import Erik from '../../Resources/img/image_not_availble.png';

const Team = () => {
  return (
<section className="team">
    
 <div className="title-team">
      <h1 className="title-text" style={{ color: 'white' }} >Our Team</h1>
      <div className="title-underline"></div>
    </div> 

    <div className="jmc_diag" >
      <img src={Diag} alt="dia"/>
    </div>

    <div className="team-center">
      <article className="team-member">
      <img src={Bren} alt="img" />
        <h2>Brennon Borbon</h2>
        <h5>Head, New Buildings</h5>
        <hr />
        <p>Specification Review</p><p>Yard review and selection</p><p>New Building Supervision</p><p>Delivery Negotiations</p><p>Claims Handling</p>
        <hr />
        <p><strong><i class="fas fa-envelope"></i></strong> bbo@jmc-limited.com</p>
          
      </article>
      <article className="team-member">
      <img src={Olek} alt="img" />
        <h2>Oleksandr Gutchak</h2>
        <h5>Head, OBM Department</h5>
        <hr />
        <p>On-Board Maintenance</p><p>On-board Repairs</p><p>Exposed Deck Repairs</p><p>Deck Maintenance</p><p>Ship Riding Team</p>
        <hr />
        <p><strong><i class="fas fa-envelope"></i></strong> tech@jmc-limited.com</p>
          
      </article>
      <article className="team-member">
      <img src={Mart} alt="img" />
        <h2>Martin Jennet</h2>
        <h5>Head, Dry Dockings</h5>
        <hr />
        <p>Guarantee Surveys</p><p>Pre-Dry Docking Surveys</p><p>Dry Docking Supervision</p><p>On-Board Tutoring</p><p>Claims Support</p>
        <hr />
        <p><strong><i class="fas fa-envelope"></i></strong> mje@jmc-limited.com</p>
          
      </article> 
      {/* <article className="team-member">
      <img src={Erik} alt="img" />
        <h2>Erik Christensen</h2>
        <h5>IT Department</h5>
        <hr />
        <p>All IT related support</p>
        <p></p>
        <p></p>
          <div className="team-member-footer">
          <li>
            <ul>Email: ech@jmc-limited.com</ul>
          </li>
        </div>  
      </article> */}
    </div>
  </section>
  );
};

export default Team;