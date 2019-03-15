import React from 'react';


const Dry_Dock = () => {
  return (
    <div className="topic_section_style" >
      <div className="title" >
      </div> 
      <div className="title" >
      <div className="title-text" >
          <h1>Dry-Docking</h1>
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
    <p className="serv-p">Proper customization of the paint specification and planning of the dry-docking surface treatment process will be the stepping stone for initial savings and a quality improvement which will facilitate further savings during vessel operation.</p>
    <p className="serv-p">To use the correct products, and only necessary amounts are part of our agenda, as the focus on savings and quality from our clients is ever increasing.</p>
    <p className="serv-p" >By constant care and foresight supervision and correct intervention, during the dry-docking surface treatment process, the potential for paint and material savings, and further improvement of the quality is huge.</p> 
    </section>
  </div>
      
    </div>
  );
};

export default Dry_Dock;