import React, { Component } from 'react';
import PaintTech from './paint_tech';
import Blog from './blog';

 class OverviewPT extends Component {
  render() {
    return (
      <div>
        < PaintTech/>
        <Blog />
      </div>
    )
  }
}

export default OverviewPT;