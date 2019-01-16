import React, { Component } from 'react';
import PaintList from './paintList';

 class PaintDetail extends Component {
  render() {
    const {paints} = this.props;
    return (
      <React.Fragment>
        {paints.map((paint) => (
          <PaintList 
          paint={paint}
          key={paint.id}
          />
        ))}
      </React.Fragment>
    )
  }
}

export default PaintDetail;
