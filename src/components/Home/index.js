import React, { Component } from 'react';
import Banner from './banner';
import Skills from './skills';
import Services from './services';
import Projects from './projects';

 class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Skills />
        <Services />
        <Projects />
      </div>
    )
  }
}

export default Home;
