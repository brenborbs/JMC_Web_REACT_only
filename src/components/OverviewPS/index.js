import React, { Component } from 'react';
import PreSurvey from './pre_survey';
import Blog from './blog';

 class OverviewPS extends Component {
  render() {
    return (
      <div>
        < PreSurvey/>
        <Blog />
      </div>
    )
  }
}

export default OverviewPS;