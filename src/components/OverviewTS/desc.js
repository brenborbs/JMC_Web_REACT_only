import React from 'react';
import { Link } from 'react-router-dom';


const Tank_Surv = () => {
  return (
    <div className="topic_section_style" 
    style={{ paddingTop: '5px' }} 
    >
      <div className="title" >
      <div className="title-text" >
          <h1>Actual Damage Assestment</h1>
        </div>
        <div className="title-underline"></div>
         {/* <p style={{ 
          textAlign: 'center' , 
          paddingTop: '5px', 
          letterSpacing: '2px' , 
          fontSize: '25px', 
          fontStyle: 'italic'}}>We are here for you</p>  */}
      </div>

  <div id="v-serv-desc"  >
    <section id="v-serv-info" >
      <div class="v-serv-center"  >
        <div class="v-serv-item">
          <i class="fa fa-check"></i>
          <p>Ballast Tanks</p>
        </div>
        <div class="v-serv-item">
          <i class="fa fa-check"></i>
          <p>Fresh Water Tanks</p>
        </div>
        <div class="v-serv-item">
          <i class="fa fa-check"></i>
          <p>Engine Room Tanks</p>
        </div>
        <div class="v-serv-item">
          <i class="fa fa-check"></i>
          <p>Fore and Aft Peak Tanks</p>
        </div>
      </div>
    </section>
    <section id="v-serv-map">
    <p className="v-serv-p">As your ship begins to age, existing paint damages inside the tanks will need to be monitored and checked, thus giving you information if when the tanks may need to be treated. Recent IMO guidelines are also required that the tanks need to be in "GOOD" condition to get acceptance certificates from class surveys. In JMC, we will do the tank survey prior any class surveys and provide you with an extensive report on the damages and rectification estimates.</p>
    <p className="v-serv-p">If the situation of the tanks are in "POOR" condition as per IMO tank guidelines, we will help you in supervising the tank repairs with the contractors, ensuring proper quality rectification at a reasonable cost.

</p> 
    </section>
    
  </div>
  <div className="section-btn">
      <Link to="/contact" >Contact Us</Link>
    </div> 
      
    </div>
  );
};

export default Tank_Surv;