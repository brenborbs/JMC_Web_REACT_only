import React, { Component } from 'react';
// import Banner from './banner_about';
import Topic from './topic';
import Review from './review';
import Team from './team';

 class About extends Component {
  render() {
    return (
      <div>
        {/* <Banner /> */}
        <Topic />
        <Team />
        <Review />
      </div>
    )
  }
}

export default About;
