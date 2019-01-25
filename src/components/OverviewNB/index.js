import React, { Component } from 'react';
import Banner from './banner';
// import NewBuild from './buildnew';
import Desc from './desc';
// import Blog from './blog';

 class OverviewTS extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Desc />
        {/* < NewBuild />   */}
         {/* <Blog />  */}
      </div>
    )
  }
}

export default OverviewTS;