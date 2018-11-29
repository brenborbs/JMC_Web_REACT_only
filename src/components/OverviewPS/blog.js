import React from 'react';
import { Link } from 'react-router-dom';
import Sam from '../../Resources/img/pre_surveycase.png';

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
      
      <p><strong>Good Practices for Removing Corrosion On-Board </strong></p>
      <p>As shown in the photo, having a set of pneumatic tools to remove is not enough. Some simple surface preparation techniques are needed to acheieved a good and efficient treatment result.</p>
      <p>Good and bad surface preparations are shown clearly side by side. The result of the cup brush and chipper while both being able to remove rust, still leaves enough black scale on the insides and it could not create a feathered-edge on the sides. Feather-edging as a surface preparation technique is important because this can avoid overlapping of the primer and succeeding coats in the system.</p>
      <p>On the other hand, the left side shows the result of using an ordinary grinder which leaves a much better preparation result. Edges have been 'feathered' properly and rust was almost completely remove leaving a near white metal result. With this simple demonstration, it clearly proves that having a bit of knowledge with the different results for using grinders versus both cup brush and chipper could lead to efficient and lasting results.</p>

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