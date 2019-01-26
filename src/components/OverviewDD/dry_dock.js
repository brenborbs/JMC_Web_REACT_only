import React from 'react';
// import { Link } from 'react-router-dom';
// import Phoq from '../../Resources/img/dda.JPG';
import ReactPlayer from 'react-player';

const Dry_Dock = () => {
  return (
    <div className="topic_section_style" >
      <div className="title" >
      {/* <div className="title-text" >
          <h1>Dry Dockings</h1>
        </div> */}
        {/* <div className="title-underline"></div> */}
        {/* <p style={{ 
          textAlign: 'center' , 
          paddingTop: '5px', 
          letterSpacing: '2px' , 
          fontSize: '25px', 
          fontStyle: 'italic'}}>We are here for you</p> */}
      </div> 

      <div className='player-wrapper' >
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=qsTP1aMnlfM'
          width='100%'
          height='100%'
        />
      </div>

      <div className="title" >
      <div className="title-text" >
          <h1>Dry Dockings</h1>
        </div>
        <div className="title-underline"></div>
        <p style={{ 
          textAlign: 'center' , 
          paddingTop: '5px', 
          letterSpacing: '2px' , 
          fontSize: '25px', 
          fontStyle: 'italic'}}>We are here for you</p>
      </div>
      
  <div id="serv-desc">
    <section id="serv-info">
      <div className="serv-center">
        <div className="serv-item">
          <i className="fa fa-check"></i>
          <p>Project Management</p>
        </div>
        <div className="serv-item">
          <i className="fa fa-check"></i>
          <p>Shipyard Meetings</p>
        </div>
        <div className="serv-item">
          <i className="fa fa-check"></i>
          <p>Actual Paint Control</p>
        </div>
        <div className="serv-item">
          <i className="fa fa-check"></i>
          <p>Paint Equipment Check</p>
        </div>
        <div className="serv-item">
          <i className="fa fa-check"></i>
          <p>Paint Maintenance Seminars</p>
        </div>
        <div className="serv-item">
          <i className="fa fa-check"></i>
          <p>On-Board Tutoring</p>
        </div>
      </div>
    </section>
    <section id="serv-map">
    <p className="serv-p">During drydocking, we will help you in managing the hull treatment and painting operations during the period. We will be on standby and available 24/7 , as some of the shipyards worked in 2 shifts. Our inspector will be there observing the whole activity, ensuring correct surface preparation and attending shipyard meetings, discussing and giving solutions through-out the whole process.</p>
    <p className="serv-p">Many times, it has been our experience that paint consumption delivered on site, at times may be lacking or even more than enough but still the owner has to pay for the excess consumption. Our inspectors will control and will check the paint equipment prior starting any spray paintin applications. This is to ensure proper actual paint consumption has been monitored and moreover, our inspectors will guide the paint applicators to use Wet Film Thickness during the application to avoid excess paint consumption and defects all along.</p> 
    </section>
    
  </div>
  {/* <div className="section-btn">
      <Link to="/contact" >Contact Us</Link>
    </div> */}
      
    </div>
  );
};

export default Dry_Dock;