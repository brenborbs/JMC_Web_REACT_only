import React from 'react';
import { Link } from 'react-router-dom';
import Sam from '../../Resources/img/transCase.png';

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
      
      <p><strong>A Tank Sample where corrosion is between transition from fair to poor condition.</strong></p>
      <p>The photo shows the tank condition as transition fair to poor coating condition according to IACS Recommendation 87, Guideline For Coating Maintenance and Repairs for Ballast Tanks and Combined Cargo/Ballast Tanks on Oil tankers. The tank on the photo is at very Poor condition.</p>
      <p>Transition conditions in Tank surveys are a bit trickier since as an inspector, you are judging whether to give the tank a FAIR pass or POOR neglected condition. To add, the owners are also at pressure to get the vessel to sail continously to avoid downtime and perhaps move the next maintenance treatment on the tanks to a later date to earn some additional savings for the meantime.</p>
      <p>With the difficult dillema at hand, the best recourse would be to take the general and overall view of the tanks, then take in the percentages. Comparing both sides, if more tank areas or percentages fall on POOR conditions, then it gets this rating. Otherwise, the opposite FAIR rating is given once the sum on the FAIR areas exceed the latter.</p>

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