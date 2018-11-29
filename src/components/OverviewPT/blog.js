import React from 'react';
import { Link } from 'react-router-dom';
import Sam from '../../Resources/img/redCase.png';

const Blog = () => {
  return (
    <div className="blog" >
      
      <div className="title-blog">
      <div className="title-text">
        <h1>Case Studies</h1>
      </div>
      <div className="title-underline"></div>
    </div>

    <div className="content_wrap" >
    <div className="blog_content" >
      <article className="blog_post" >
      <div className="entry_content" >
      <p>
        <img className="alignleft"  src={Sam} alt="sam"  /> 
      </p>
      
      <p><strong>A Tank Sample Wherein Risk Level is Very High</strong></p>
      <p>The photo shows that the tank has almost more than 70% Hard Scale as described according to IACS PR-33 Owners Hull Inspection and Maintenance Schemes. The tank on the photo is labeled as colored RED under Traffic Light Condition Scoring.</p>
      <p>This condition may seem to be more common for older vessels however as what we have encountered in our projects, such conditions are even posible in 5 year old ships. Corrosion once neglected will surely destroy the steel plate which may also affect the over-all structural integrity of the vessel. To prevent such conditions from happening, it is very important to mix practical and theoritical knowledge in surface treatment standards during in-service of the ship.</p>
      <p>Scheduled Surveys and inspections on the tanks coupled with detailed corrosion assestments can prevent these worse conditions from happening. Moreover, if the condition calls for a treatment in the tanks, this should be followed to minimize the corrosion damages and apply protective coating to ensure tank integrity preservation.</p>

      </div>
      </article >
    </div>
    </div>  
    
    <div className="section-btn">
      <Link to="/contact" >Contact Us</Link>
    </div>
    </div>
  );
};

export default Blog;