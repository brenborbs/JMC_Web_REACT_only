import React, { Component } from 'react';
import Topic from './topic';
import Review from './review';
import Team from './team';

 class About extends Component {
  render() {
    return (
      <div>
        <Topic />
        <Team />
        <Review />
      </div>
    )
  }
}

export default About;
