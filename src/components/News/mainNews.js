import React from "react";
import Update from "./mainUpdate";
import News from "./entryNews";

const MainNews = () => {
  return (
    <div className="entry-content">
      <div
        className="feature-image-content"
        style={{
          marginTop: "6em"
        }}
      >
        <h1 className="page-title">
          <i className="fa fa-newspaper-o" aria-hidden="true" /> News
        </h1>
      </div>

      <div className="update_news_wrapper">
        <Update />
        <News />
      </div>
    </div>
  );
};

export default MainNews;
