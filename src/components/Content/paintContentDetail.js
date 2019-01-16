import React from 'react';
import { Link } from 'react-router-dom';

const PaintContentDetails = ({paint}) => {
  return (
    <div className="col-md-9" style={{ paddingTop: '3em', letterSpacing: '2px' }} >
    <img className="featurette-image img-fluid mx-auto" src={`${paint.photo}`} alt="paint" style={{ width: '100%' }} />
    <h2 className="featurette-heading" style={{ paddingTop:'1.5em' }} >{paint.title}</h2>
      <p className="lead" ><strong>Category:</strong> {paint.category}</p>
      <p className="lead" ><strong>Areas of Use:</strong> {paint.usage}</p>
      <p className="lead" ><strong>Surface Treatment:</strong> {paint.prep}</p>
      <p className="lead" ><strong>Application:</strong> {paint.application}</p>
      <div className="section-btn">
      <Link to="/paintLesson" >Go Back</Link>
      
    </div>
    </div>
  );
};

export default PaintContentDetails;