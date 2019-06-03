import React  from 'react';
import Banner from './banner';
import Desc from './desc';
import Helmet from 'react-helmet';

 const Consulting = () => {
  
    return (
      <>
        <Helmet>
        <title>JMC Limited - Services/Consulting</title>
        <meta 
        name="consulting" 
        content="Let Us Help You With Corrosion Problems" />
        <meta
          name="corrosion issues, corrosion prevention, maintenance plan, plan inspections"
          content="The cost for neglecting corrosion in your fleet is likely to increase each year. These corrosion issues may well result into earlier drydocking schedule for your ship once the tanks are found in POOR condition according to IMO standards and as observed by classification societies. If these issues are bothering you, then we can sit down with you and discuss various solutions to help tackle the corrosion damages.Taking the proper steps in preventive maintenance is very important in ensuring that your fleet maintain proper coating standards throughout their service. In JMC with our extensive experience, we can help you come up with the proper investigation and research which may well result into a fully implementable corrosion prevention plan for your fleet. "
        />
      </Helmet> 
        <Banner />
        <Desc />
      </>
    )
  }


export default Consulting;