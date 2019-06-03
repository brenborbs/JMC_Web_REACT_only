import React  from 'react';
import Topic from './topic';
import Review from './review';
import Team from './team';
import Helmet from 'react-helmet';

 const About = () => {

    return (
      <>
        <Helmet>
        <title>JMC Limited/About Us</title>
        <meta 
        name="About JMC Limited" 
        content="JMC Limited is an expert service provider for corrosion control, preventive maintenance and consultancy in the marine industry. It started operations within the last 2 years and have successfully completed and helped many major ship owners with regards to corrosion control in their fleet." />
        <meta
          name="Objective"
          content="Our main objective is to elevate the quality of the entire surface treatment process by foresight and control. This results in many savings for the ship owner and quality elevation which will be reflected positively on the future operating budget of the vessel."
        />
      </Helmet> 
        <Topic />
        <Team />
        <Review />
      </>
    )
  }


export default About;
