import React, { Component } from 'react';
import BlogLink from './BlogLink';

export default class BlogMap extends Component {
  render() {
    const { features } = this.props;
    return (
      <React.Fragment>
        {features.map(feature => (
          <BlogLink feature={feature} key={feature.id} />
        ))}
      </React.Fragment>
    )
  }
}
