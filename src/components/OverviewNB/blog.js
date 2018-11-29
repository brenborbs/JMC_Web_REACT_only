import React from 'react';
import { Link } from 'react-router-dom';
import Sam from '../../Resources/img/newCase.jpg';

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
      
      <p><strong>Secondary Surface Preparation For Erection Joints in New Buildings</strong></p>
      <p>With many new buildings in major shipyards now under IMO PSPC Ballast Tank rules, part of the standard calls for only power tooling to St 3.0 for the remaining erection joints. Though under the rule, the shipyard is permitted for this kind of treatment considering that the damages in a particular tank do not exceed maximum 2% when compared to the whole area.</p>
      <p>At a glance, this may be practical especially since shipyards are always keeping up with the delivery schedule. But in many ways, power tooling changes some of the anchor profile on the substrate. At times, leaving a more 'shinnier' result looks good but in essence, the constant friction of the disc sanders flattens out some of those anchor profile created during pre-blasting stages on the subtrate.</p>
      <p>As we have seen at in-service ships, most corrosions are likely to occur many times on the erection joints and welding seams. So a viable way to avoid this condition would be to have a delicate balance during new building stage of the vessel between power tooling and keeping the anchor profile on the erection joints. Though for some really good shipyards, they have used a particularly handy nozzle and blasting equipment to treat the erection joints.</p>

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