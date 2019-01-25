import React from 'react';
import { Link } from 'react-router-dom';


const Dry_Dock = () => {
  return (
    <div className="topic_section_style" 
    style={{ paddingTop: '5px' }} 
    >
      <div className="title" >
      <div className="title-text" >
          <h1>Pre-Surveys</h1>
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
          <p>Tank Surveys</p>
        </div>
        <div class="v-serv-item">
          <i class="fa fa-check"></i>
          <p>Corrosion Assessment</p>
        </div>
        <div class="v-serv-item">
          <i class="fa fa-check"></i>
          <p>Paint Consumption Calculation</p>
        </div>
        <div class="v-serv-item">
          <i class="fa fa-check"></i>
          <p>Shipyard Negotiation</p>
        </div>
      </div>
    </section>
    <section id="v-serv-map">
    <p className="v-serv-p">Before your ship will enter it's dry docking schedule, several tanks in vessel will need to be check in order to know which tanks will be treated during the dry docking period. The extent of the corrosion may be unknown but with our experties, we can do the survey for you and come up with actual corrosion assestment on the tanks. This assestment will serve as your guide during the drydocking, thus giving you savings as most shipyards will mostly charge you in excess for some areas which can be easily repaired by your crew.</p>
    <p className="v-serv-p">Prior entering the dry docking schedule, paint manufacturers will submit their paint consumption calculations according to their estimates. Usually, the calculations has been done on their offices without even knowing the actual situation aboard your ship. In JMC, we will conduct an all around pre-assestment survey on the entire hull plating and give you our calculations basing on what we have seen on your ship and not by random guesswork.</p> 
    </section>
    
  </div>
  <div className="section-btn">
      <Link to="/contact" >Contact Us</Link>
    </div> 
      
    </div>
  );
};

export default Dry_Dock;