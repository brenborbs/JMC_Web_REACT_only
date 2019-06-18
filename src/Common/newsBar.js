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
        <Link to={`/news/update/0`} style={{ color: "white" }}>
          Combined freight and passenger ferry construction initiated in China
        </Link>
      </span>
    </div>
  );
};

export default NewsBar;
