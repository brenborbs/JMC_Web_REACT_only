import React, { Component } from "react";
import { connect } from "react-redux";
import NewsMap from "./newsMap";

const mapState = state => ({
  newsInfo: state.newsInfo
});

class EntryNews extends Component {
  render() {
    const { newsInfo } = this.props;

    return (
      <section className="news-feature">
        <div className="news-feature-container">
          <NewsMap newsInfo={newsInfo} />
        </div>
      </section>
    );
  }
}

export default connect(mapState)(EntryNews);
