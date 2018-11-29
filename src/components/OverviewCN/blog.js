import React from 'react';
import { Link } from 'react-router-dom';
import Sam from '../../Resources/img/deckCase.jpg';

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
      
      <p><strong>High Pressure Fresh Water Treatment on Deck pipes</strong></p>
      <p>The photo shows a result of an on-going HPFW treatment on the upper deck. As faced by many crews in different vessels particularly in tankers, removing corrosion on rounded shapes is very difficult. While the use of hand tools are common but then again, the result is not as efficient and not expected coming from a good surface preparation standard.</p>
      <p>To add, hand tools cannot penetrate small areas especially behind the pipe supports, u-clamps and bolts. For these, HPFW is more suitable to remove corrosion on these behind and cornered areas. This again leads to the importance of having a good maintenance schedule for the deck pipes.</p>
      <p>As what we have done for our clients, while doing the surface treatment on the deck pipes, we have also given the crew a painting seminar and some quick notes on how to lessen the impact on sea-board corrosion while sailing. We have given them important notes to preserve the existing coating on the deck pipes to such condition that it may be intact until the next maintenance schedule arrives.</p>

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