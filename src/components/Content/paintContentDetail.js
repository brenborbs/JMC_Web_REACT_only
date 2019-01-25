import React from 'react';
import { Link } from 'react-router-dom';

const PaintContentDetails = ({paint}) => {
  return (
    
      
    <div 
    className="col-md-10"
    style={{ paddingTop: '3em', letterSpacing: '2px'}} >
    <img 
    className="featurette-image img-fluid mx-auto" 
    src={`${paint.photo}`} alt="paint" style={{ width: '80%' }} />
    
    <h2 className="featurette-heading" 
    style={{ paddingTop:'1.5em'}} >{paint.title}</h2>
      <p className="p-lead" > {paint.category}</p>
      <p className="p-lead" > {paint.usage}</p>
      <p className="p-lead" > {paint.prep}</p>
      <p className="p-lead" > {paint.application}</p>
      <div className="section-btn">
      <Link to="/blog" >Go Back</Link>
      
    </div>
    </div>
    
    
  );
};

export default PaintContentDetails;