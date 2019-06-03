import React  from 'react';
import Banner from './banner';
import Desc from './desc';
import Helmet from 'react-helmet';

 const OverviewPT =() => {
  
    return (
      <>
        <Helmet>
        <title>JMC Limited/Services/Paint Technology</title>
        <meta 
        name="Paint technology" 
        content="We can show you and teach your crew the latest methods for corrosion control and have them applied to your existing fleet in operation." />
        <meta
          name="paint seminars, paint trainings, inspection guidelines, corrosion study"
          content="Be it during the course of the drydocking, our inspectors can give a brief painting seminar to your crew complete with slides and animations to teach them about the proper ways to repair paint damages in your ship. As they say, information is key and having the most knowledgeable crew in corrosion prevention will help you get savings in your vessels maintenance program.The industry is quickly changing and newer technologies in marine corrosion prevention are introduced daily. With our help, we can guide you in implementing and teaching you these new methods and apply them to your existing fleet."
        />
      </Helmet> 
        <Banner />
        <Desc />
      </>
    )
  }


export default OverviewPT;