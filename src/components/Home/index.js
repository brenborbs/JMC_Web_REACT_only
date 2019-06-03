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
        <title>JMC Limited/Marine Corrosion Experts</title>
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
        <meta
          name="drydocking supervision"
          content="Our representative will at all times be in the dry-dock to monitor the on-going works and attend all key steps."
        />
        <meta
          name="pre-docking survey"
          content="We will make condition survey of all general areas such as main deck, mooring decks and superstructure with reporting and recommendation."
        />
        <meta
          name="paint maintenance technology"
          content="As the leading corrosion experts in the industry, we will conduct a paint seminar for your crew during the course of the drydocking and provide you with concrete solutions."
        />
        <meta
          name="tank surveys inside tanks"
          content="JMC upon accepting tank surveys will go ahead as per planned and take the neccessary requirements and conduct the survey."
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
