import React  from 'react';
import Skills from './skills';
import Services from './services';
import Projects from './projects';
import Slider from './slider';


 const Home = () => {
  
    return (
      <div>
        <Slider/>
        <Skills />
        <Services />
        <Projects />
      </div>
    )
  }


export default Home;
