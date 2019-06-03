import React  from 'react';
import Skills from './skills';
import Services from './services';
import Projects from './projects';
import Slider from './slider';
import Helmet from 'react-helmet';


 const Home = () => {
  
    return (
      
        <React.Fragment>
      <Helmet>
        <title>JMC Limited - Marine Corrosion Experts</title>
        <meta 
        name="Drydockings" 
        content="We will always do our utmost to ensure the protection of your assets in the most suitable way, by continous foresight." />
        <meta
          name="Reporting"
          content="As marine corrosion experts, we will give you a clear and precise report regarding the condition of your assets including proper advice and guidance for your crew."
        />
        <meta
          name="Inspectors"
          content="Our staff is either FROSIO or NACE certified and have a great deal of experience solving corrosion problems in the marine industry."
        />
        <meta
          name="Global"
          content="We have a great deal of experience working in a multitude of locations and shipyards all over the world."
        />
      </Helmet> 
        <Slider/>
        <Skills />
        <Services />
        <Projects />
      </React.Fragment>
    )
  }


export default Home;
