import React from 'react';

const PaintContentDetails = ({paint}) => {
  return (
    
      
    <div 
    className="entry-content" >
    <h2 className="featurette-heading" 
    style={{ paddingTop:'1.5em'}} >{paint.title}</h2>
    <p><strong>Category:</strong> {paint.category}</p>
    <img 
    className="featurette-image img-fluid mx-auto" 
    src={`${paint.photo}`} alt="paint" style={{ width: '100%' }} />
    <p style={{ fontSize: '9px' }} >{paint.web}</p>
      <p> {paint.usage}</p>
      <p> {paint.prep}</p>
      <p> {paint.application}</p>
    </div>
    
    
  );
};

export default PaintContentDetails;