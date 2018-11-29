import React, { Component } from 'react';
import TankSurvey from './tank_survey';
import Blog from './blog';

 class OverviewTS extends Component {
  render() {
    return (
      <div>
        < TankSurvey/>
        <Blog />
      </div>
    )
  }
}

export default OverviewTS;