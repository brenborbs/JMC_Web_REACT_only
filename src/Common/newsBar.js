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
        <Link to={`/news/feature/0`} style={{ color: "white" }}>
          JMC Limited just completed drydocking of AIDAmira on Genoa Italy
        </Link>
      </span>
    </div>
  );
};

export default NewsBar;
