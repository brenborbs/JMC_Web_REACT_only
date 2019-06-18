import React, { Component } from "react";
import { connect } from "react-redux";
import CasesMap from "./CasesMap";

const mapState = state => ({
  paints: state.paints
});

class CasesEntry extends Component {
  render() {
    const { paints } = this.props;
    return (
      <div className="card-group">
        <CasesMap paints={paints} />
      </div>
    );
  }
}

export default connect(mapState)(CasesEntry);
