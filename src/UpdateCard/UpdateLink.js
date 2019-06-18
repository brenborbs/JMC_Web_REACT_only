import React from "react";
import { Link } from "react-router-dom";

const UpdateLink = ({ newUpdate }) => {
  return (
    <React.Fragment>
      <div className="card" style={{ maxWidth: "220px" }}>
        <img
          className="card-img-top"
          src={newUpdate.imgOne}
          alt={newUpdate.title}
          style={{ height: "100px" }}
        />
        <div className="card-body">
          <h6 className="case-title">{newUpdate.title}</h6>
          <p className="card-text">
            <small className="text-muted">
              {" "}
              <Link
                to={`/news/update/${newUpdate.id}`}
                style={{ fontSize: "12px" }}
              >
                Read more...
              </Link>
            </small>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UpdateLink;
