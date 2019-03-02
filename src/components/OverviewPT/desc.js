import React from 'react';
import Video from './video';


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
      </div>

    <div className="container-fluid" >
      <div className="row" >
          <div className="col-sm-6">
            <div className="ptech-center" >
              <div className="ptech-item" >
                <i className="fa fa-check"></i>
                <p>Paint Seminars</p>
              </div>
            </div>
            <div className="ptech-center" >
              <div className="ptech-item" >
                <i className="fa fa-check"></i>
                <p>Paint Trainings</p>
              </div>
            </div>
            <div className="ptech-center" >
              <div className="ptech-item" >
                <i className="fa fa-check"></i>
                <p>Inspection Guidelines</p>
              </div>
            </div>
            <div className="ptech-center" >
              <div className="ptech-item" >
                <i className="fa fa-check"></i>
                <p>Corrosion Study</p>
              </div>
            </div> 
          </div>
          <div className="col-sm-6">
            <div className="p-video">
              <Video />
            </div>
          </div>
      </div>
    </div>

    <section id="ptech-map" >
    <p className="p-ptech" >Be it during the course of the drydocking, our inspectors can give a brief painting seminar to your crew complete with slides and animations to teach them about the proper ways to repair paint damages in your ship. As they say, information is key and having the most knowledgeable crew in corrosion prevention will help you get savings in your vessels maintenance program.</p>
    <p>The industry is quickly changing and newer technologies in marine corrosion prevention are introduced daily. With our help, we can guide you in implementing and teaching you these new methods and apply them to your existing fleet.</p> 
    </section>
  
    
    
    </div> 

  );
};

export default Paint_Tech;

// https://youtu.be/56mFLAFfrjE


