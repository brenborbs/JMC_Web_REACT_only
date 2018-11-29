import React, { Component } from 'react';
import NewBuild from './newbuild';
import Blog from './blog';

 class OverviewTS extends Component {
  render() {
    return (
      <div>
        < NewBuild />
        <Blog />
      </div>
    )
  }
}

export default OverviewTS;