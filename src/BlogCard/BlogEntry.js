import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogMap from './BlogMap';

const mapState = state => ({
  features: state.features
});

class BlogEntry extends Component {
  render() {
    const { features } = this.props;
    return (
      <div className="card-group">
        <BlogMap features={features} />
      </div>
    )
  }
}

export default connect(mapState) (BlogEntry);
