import React from "react";
import { connect } from "react-redux";
import PaintContentDetail from "./paintContentDetail";

const mapState = (state, ownProps) => {
  const paintId = ownProps.match.params.id;

  let paint = {};

  if (paintId && state.paints.length > 0) {
    paint = state.paints.filter(paint => paint.id === paintId)[0];
  }

  return {
    paint
  };
};

const PaintContent = ({ paint }) => {
  return (
    <div
      className="entry-content"
      style={{ marginTop: "80px", marginBottom: "30px" }}
    >
      <PaintContentDetail paint={paint} />
    </div>
  );
};

export default connect(mapState)(PaintContent);
