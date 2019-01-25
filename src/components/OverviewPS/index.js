import React, { Component } from 'react';
import Banner from './banner';
import Desc from './desc';
// import PreSurvey from './pre_survey';
// import Blog from './blog';

 class OverviewPS extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Desc />
        {/* < PreSurvey/>
        <Blog /> */}
      </div>
    )
  }
}

export default OverviewPS;