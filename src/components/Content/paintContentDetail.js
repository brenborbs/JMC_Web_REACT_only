import React from 'react';
import { Facebook, Twitter, Linkedin, Whatsapp } from 'react-social-sharing';

const PaintContentDetails = ({paint}) => {
  return (
    <React.Fragment>
    <div className="post-detail-content" >
    
    <div className="intro">
		<h1 className="post-title">{paint.title}</h1>
	  </div>

    <div className="post-content">

      <p> {paint.usage}</p>
      <p> {paint.prep}</p>
      <img 
      className="featurette-image img-fluid mx-auto" 
      src={`${paint.photo}`} alt="paint" style={{ width: '100%' }} />
      <p style={{ fontSize: '9px' }} >{paint.web}</p>
      <div className="summary">
		  <p>{paint.summary}</p>
	    </div>
      <p> {paint.application}</p>
    </div>
        <div className="story-container">
        <h4>Share this story</h4>
            <Facebook solidcircle big link={`https://jmc-limited.com/blog/${paint.id}`}/>
            <Twitter solid big message="Read our article" link={`https://jmc-limited.com/blog/${paint.id}`}/>
            <Linkedin solidcircle big message="Read our article" link={`https://jmc-limited.com/blog/${paint.id}`}/>
            <Whatsapp solid big message="Share on Whatsapp" link={`https://jmc-limited.com/blog/${paint.id}`}/>
        </div>
    </div>
    </React.Fragment>
  );
};

export default PaintContentDetails;