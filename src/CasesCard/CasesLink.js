import React from "react";
import { Link } from "react-router-dom";

const CasesLink = ({ paint }) => {
  return (
    <React.Fragment>
    <div className="card" style={{ maxWidth: '220px' }} >
    <img className="card-img-top" src={paint.photo} alt={paint.title} style={{ height: '100px' }} />
    <div className="card-body">
      <h6 className="case-title">{paint.title}</h6>
      <p className="card-text"><small className="text-muted"> <Link to={`/blog/${paint.id}`} style={{ fontSize: '12px' }} >Read more...</Link></small></p>
    </div>
  </div>
  </React.Fragment>
  );
};

export default CasesLink;



