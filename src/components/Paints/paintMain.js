import React, { Component } from "react";
import { connect } from "react-redux";
import PaintDetail from "./paintDetail";

const mapState = state => ({
  paints: state.paints
});

class Paint extends Component {
  render() {
    const { paints } = this.props;

    return (
      <section className="paint-projects" id="projects-p">
        <div className="title-case">
          <h1>
            <i className="fa fa-tasks" aria-hidden="true" /> Case Studies
          </h1>
          <p>
            The stories below contains some of our experiences while undertaking
            various projects worldwide. The cases includes photos to help
            explain some of the common challenges that will be encountered
            during various corrosion control projects.
          </p>
        </div>

        <div className="paint-project-container">
          <PaintDetail paints={paints} />
        </div>
      </section>
    );
  }
}

export default connect(mapState)(Paint);
