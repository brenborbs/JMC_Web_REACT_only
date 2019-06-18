import React, { Component } from "react";
import { connect } from "react-redux";
import CardMap from "./CardMap";

const mapState = state => ({
  newsInfo: state.newsInfo
});

class EntryNewsCard extends Component {
  render() {
    const { newsInfo } = this.props;
    return (
      <div className="card-deck">
        <CardMap newsInfo={newsInfo} />
      </div>
    );
  }
}

export default connect(mapState)(EntryNewsCard);
