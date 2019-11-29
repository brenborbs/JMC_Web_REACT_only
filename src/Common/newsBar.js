import React from "react";
import { Link } from "react-router-dom";

const NewsBar = () => {
  return (
    <div className="axe">
      <div className="axf">
        <div className="axi">
          <i className="fa fa-newspaper-o" aria-hidden="true" />
        </div>
      </div>
      <span>
        <Link to={`/news/update/1`} style={{ color: "white" }}>
          New ferry for the Channel reaches another milestone in construction
        </Link>
      </span>
    </div>
  );
};

export default NewsBar;
