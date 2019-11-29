import React, { Component } from "react";
import { connect } from "react-redux";
import UpdateMap from "./updateMap";

const mapState = state => ({
  newsUpdate: state.newsUpdate
});

class MainUpdate extends Component {
  render() {
    const { newsUpdate } = this.props;
    return (
      <div className="row mb-2">
        <UpdateMap newsUpdate={newsUpdate} />
      </div>
    );
  }
}

export default connect(mapState)(MainUpdate);

// Note change div classname='row mb-2' when adding updates soon!
