import React, { Component } from 'react';
import FeaturedDetail from './featuredDetail';

 class featuredList extends Component {
  render() {
    const { features } = this.props;
    return (
      <div>
        <React.Fragment>
        {features.map((feature) => (
          <FeaturedDetail 
          feature={feature}
          key={feature.id}
          />
        ))}
      </React.Fragment>
      </div>
    )
  }
}

export default featuredList;
