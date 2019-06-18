import React from "react";
import { Link } from "react-router-dom";

const CardLink = ({ newInfo }) => {
  return (
    <div className="card" style={{ maxWidth: "220px" }}>
      <img className="card-img-top" src={newInfo.img} alt={newInfo.title} />
      <div className="card-body">
        <h6 className="card-title">{newInfo.title}</h6>
        <small className="text-muted">
          <Link to={`/news/feature/${newInfo.id}`}>Continue reading...</Link>
        </small>
      </div>
    </div>
  );
};

export default CardLink;
