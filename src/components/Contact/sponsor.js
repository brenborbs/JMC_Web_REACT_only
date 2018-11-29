import React from 'react';
import Spon from '../../Resources/img/Soldalløberne.jpg';


const Sponsor = () => {
  return (
    <div className="sponsor-section_style" >
  
  <div className="title">
      <div className="title-text">
        <h1>Community Sponsorships</h1>
      </div>
      
      <div className="title-underline"></div>
    </div>
    
    <div className="sponsor" >
      <div>
      <p><strong>JMC-LIMITED</strong> is also active in sponsoring local arrangements and sports clubs.</p>
        <p>
          <img src={Spon} alt="sol"/>
        </p>
      <p>We are proud to have sponsored the running t-shirts for 22 persons.</p>

      <p><strong>“The proud Fusion t-shirt sponsor for a running team of 22 energetic women and men. We wish them fair weather and good legs!!!”</strong></p>
      </div>
    </div>
      
    
</div>
  );
};

export default Sponsor;