import React, { Component } from 'react';
import Banner from './banner';
import Desc from './desc';
// import TankSurvey from './tank_survey';
// import Blog from './blog';

 class OverviewTS extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Desc />
        {/* < TankSurvey/>
        <Blog /> */}
      </div>
    )
  }
}

export default OverviewTS;