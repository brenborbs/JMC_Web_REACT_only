import React from 'react';
// import { Link } from 'react-router-dom';


const Consulting = () => {
  return (
    <div className="topic_section_style" 
    style={{ paddingTop: '5px' }} 
    >
      <div className="title" >
      <div className="title-text" >
          <h1>Brainstorming to tackle corrosion damages</h1>
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
      <div className="v-serv-center"  >
        <div className="v-serv-item">
          <i className="fa fa-check"></i>
          <p>Corrosion Issues</p>
        </div>
        <div className="v-serv-item">
          <i className="fa fa-check"></i>
          <p>Corrosion Prevention</p>
        </div>
        <div className="v-serv-item">
          <i className="fa fa-check"></i>
          <p>Maintenance Plan</p>
        </div>
        <div className="v-serv-item">
          <i className="fa fa-check"></i>
          <p>Plan Inspections</p>
        </div>
      </div>
    </section>
    <section id="v-serv-map">
    <p className="v-serv-p">The cost for neglecting corrosion in your fleet is likely to increase each year. These corrosion issues may well result into earlier drydocking schedule for your ship once the tanks are found in "POOR" condition according to IMO standards and as observed by classification societies. If these issues are bothering you, then we can sit down with you and discuss various solutions to help tackle the corrosion damages.</p>
    <p className="v-serv-p">Taking the proper steps in preventive maintenance is very important in ensuring that your fleet maintain proper coating standards throughout their service. In JMC with our extensive experience, we can help you come up with the proper investigation and research which may well result into a fully implementable corrosion prevention plan for your fleet.

</p> 
    </section>
    
  </div>
  {/* <div className="section-btn">
      <Link to="/contact" >Contact Us</Link>
    </div>  */}
      
    </div>
  );
};

export default Consulting;