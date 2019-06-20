import React from "react";
import { Link } from "react-router-dom";

const UpdateLink = ({ newUpdate }) => {
  return (
    <React.Fragment>
      <ul className="list-unstyled mb-0">
        <li style={{ listStyle: "none" }}>
          <Link
            to={`/news/update/${newUpdate.id}`}
            style={{ fontSize: "12px", color: "black" }}
          >
            <img
              className="img-thumbnail"
              src={newUpdate.imgOne}
              alt={newUpdate.title}
              style={{
                float: "left",
                width: "50px",
                height: "50px",
                margin: "5px"
              }}
            />
            {newUpdate.title} || {newUpdate.date}
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default UpdateLink;
