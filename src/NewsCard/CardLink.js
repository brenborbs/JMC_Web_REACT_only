import React from "react";
import { Link } from "react-router-dom";

const CardLink = ({ newInfo }) => {
  return (
    <ul className="list-unstyled mb-0">
      <li style={{ listStyle: "none" }}>
        <Link
          to={`/news/feature/${newInfo.id}`}
          style={{ fontSize: "12px", color: "black" }}
        >
          <img
            className="img-thumbnail"
            src={newInfo.img}
            alt={newInfo.title}
            style={{
              float: "left",
              width: "50px",
              height: "50px",
              margin: "5px"
            }}
          />
          {newInfo.title} || {newInfo.date}
        </Link>
      </li>
    </ul>
  );
};

export default CardLink;
