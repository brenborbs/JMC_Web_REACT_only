import React from 'react';
import Video from './PSvideo';

const Dry_Dock = () => {
  return (
    <div className="topic_section_style" 
    style={{ paddingTop: '5px' }} 
    >
      <div className="title" >
      <div className="title-text" >
          <h1>Pre-Docking Survey</h1>
        </div> 
        <div className="title-underline"></div>
        <Video />
      </div>

  <div id="v-serv-desc"  >
    <section id="v-serv-info" >
      <div className="v-serv-center"  >
        <div className="v-serv-item">
          <i className="fa fa-check"></i>
          <p>Tank Surveys</p>
        </div>
        <div className="v-serv-item">
          <i className="fa fa-check"></i>
          <p>Corrosion Assessment</p>
        </div>
        <div className="v-serv-item">
          <i className="fa fa-check"></i>
          <p>Paint Consumption Calculation</p>
        </div>
        <div className="v-serv-item">
          <i className="fa fa-check"></i>
          <p>Shipyard Negotiation</p>
        </div>
      </div>
    </section>
    <section id="v-serv-map">
    <p className="v-serv-p">The proper planning process of a dry-docking should entail a pre-docking paint survey.</p>
    <p className="v-serv-p">During the survey we will perform inspection of all available tanks and exterior areas. The inspection will result in a comprehensive report. The report will give the superintendent a detailed “picture” of the condition of the inspected areas, with correct extent, degree of breakdown and professional suggestions to surface treatment. </p> 
    <p className="v-serv-p">The report will serve as the guideline during initial owner/yard scope of work discussions, thereby ensure that no change orders or extra cost will occur during the dry-docking.</p>
    </section>
    
  </div> 
    </div>
  );
};

export default Dry_Dock;