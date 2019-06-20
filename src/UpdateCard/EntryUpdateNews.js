import React, { Component } from "react";
import { connect } from "react-redux";
import UpdateMap from "./UpdateMap";

const mapState = state => ({
  newsUpdate: state.newsUpdate
});

class EntryUpdateNews extends Component {
  render() {
    const { newsUpdate } = this.props;
    return (
      <div className="row">
        <UpdateMap newsUpdate={newsUpdate} />
      </div>
    );
  }
}

export default connect(mapState)(EntryUpdateNews);
