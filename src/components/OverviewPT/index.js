import React, { Component } from 'react';
import Banner from './banner';
import Desc from './desc';
// import PaintTech from './paint_tech';
// import Blog from './blog';

 class OverviewPT extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Desc />
        {/* < PaintTech/>
        <Blog /> */}
      </div>
    )
  }
}

export default OverviewPT;