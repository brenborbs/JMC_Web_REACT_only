import React from 'react';
import { Link } from 'react-router-dom';


const Paint_Tech = () => {
  return (
    <div className="topic_section_style" 
    style={{ paddingTop: '5px' }} 
    >
      <div className="title" >
      <div className="title-text" >
          <h1>We Share our knowledge with you</h1>
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
          <p>Paint Seminars</p>
        </div>
        <div class="v-serv-item">
          <i class="fa fa-check"></i>
          <p>Paint Trainings</p>
        </div>
        <div class="v-serv-item">
          <i class="fa fa-check"></i>
          <p>Inspection Guidelines</p>
        </div>
        <div class="v-serv-item">
          <i class="fa fa-check"></i>
          <p>Corrosion Study</p>
        </div>
      </div>
    </section>
    <section id="v-serv-map">
    <p className="v-serv-p">Be it during the course of the drydocking, our inspectors can give a brief painting seminar to your crew complete with slides and animations to teach them about the proper ways to repair paint damages in your ship. As they say, information is key and having the most knowledgeable crew in corrosion prevention will help you get savings in your vessels maintenance program.</p>
    <p className="v-serv-p">The industry is quickly changing and newer technologies in marine corrosion prevention are introduced daily. With our help, we can guide you in implementing and teaching you these new methods and apply them to your existing fleet.</p> 
    </section>
    
  </div>
  <div className="section-btn">
      <Link to="/contact" >Contact Us</Link>
    </div> 
      
    </div>
  );
};

export default Paint_Tech;