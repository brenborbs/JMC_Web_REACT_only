import React from 'react';

const PaintContentDetails = ({paint}) => {
  return (
    
      
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
		  <p><strong><em>{paint.summary}</em></strong></p>
	    </div>
      <p> {paint.application}</p>
    </div>
    </div>
  );
};

export default PaintContentDetails;