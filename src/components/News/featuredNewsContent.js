import React from "react";
import { connect } from "react-redux";
import Detail from "./featuredNewsDetail";

const mapState = (state, ownProps) => {
  const newsInfoId = ownProps.match.params.id;

  let newsInfo = {};

  if (newsInfoId && state.newsInfo.length > 0) {
    newsInfo = state.newsInfo.filter(newsInfo => newsInfo.id === newsInfoId)[0];
  }

  return {
    newsInfo
  };
};

const FeaturedNewsContent = ({ newsInfo }) => {
  return (
    <div className="entry-content" style={{ marginTop: "80px" }}>
      <Detail newsInfo={newsInfo} />
    </div>
  );
};

export default connect(mapState)(FeaturedNewsContent);
