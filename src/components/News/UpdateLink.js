import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

const UpdateLink = ({ newUpdate }) => {
  return (
    <div className="col-md-10">
      <Helmet>
        <meta name={newUpdate.title} content={newUpdate.bodOne} />
      </Helmet>
      <div className="card flex-md-row mb-4 box-shadow h-md-250">
        <div className="card-body d-flex flex-column align-items-start">
          <img
            className="card-img-top"
            src={newUpdate.imgOne}
            alt={newUpdate.title}
            style={{ height: "500px", width: "100%", display: "block" }}
          />

          <h3 className="mb-0">{newUpdate.title}</h3>
          <div className="mb-1 text-muted">
            <em>{newUpdate.date}</em>
          </div>
          <p className="card-text mb-auto">{newUpdate.bodOne}</p>
          <p className="lead mb-0">
            <Link
              to={`/news/update/${newUpdate.id}`}
              className="news-link font-weight-bold"
            >
              Continue reading...
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpdateLink;

// Note change on 1st div classname='col-md-6' when adding updates soon!
