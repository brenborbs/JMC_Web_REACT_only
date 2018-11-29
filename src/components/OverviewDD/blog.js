import React from 'react';
import { Link } from 'react-router-dom';
import Sam from '../../Resources/img/drydockcase.jpg';

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
      
      <p><strong>Treatment By High Pressure Fresh Water versus Handtooling</strong></p>
      <p>As clearly shown in the photo on the left, HPFW result is more efficient in removing corrosion on the upperdeck and it also removes grease and oil. It also exposes the bare metal and anchor profile on the surface, thus ensuring proper preparation prior applying the paint primer which is a crucial element within a coating system.</p>
      <p>Even with the disadvantages of HPFW such as condition of the Jet washing equipment and air pressure during washing or treatment, however in the hands of a professional, the surface preparation will automatically be elevated and leaves a much better result than manual hand tooling on the upperdeck.</p>
      <p>A lot of times, many ships fall into victims of having to exchange quality over economy which always results in more damage to the deck plate like heavy pitting and high wastage. In the end, the cost to repair the deck will be substantially high and may even require replating for some parts which is additional burden to the owners. Therefore as we have experienced and to avoid such situations, the best practices are always to maintain a proper scheduled maintenance scheme coupled with quality and efficient treatment on the decks.   </p>

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