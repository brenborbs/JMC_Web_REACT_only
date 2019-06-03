import React from 'react';
import BannerNBPS from './banner';
import DescNBPS from './desc';
import Helmet from 'react-helmet';

const NBSurvey = () => {
  return (
    <>
      <Helmet>
        <title>JMC Limited/Services/New-Building Guarantee Paint Survey</title>
        <meta 
        name="New-Building Guarantee Paint Survey" 
        content="Guiding you in getting paint guarantee claims towards the new-building shipyard." />
        <meta
          name="ballast tanks, cargo holds, cargo oil tanks, fresh water tanks, aft and fore peak tanks"
          content="We will make an extensive survey of all accessible areas of the vessel. The more areas, the better is the basis for a suitable compensation. Based on the survey, we compile a comprehensive report and a realistic calculation of the rectification cost.With the report and the calculation in hand, the client is well equipped to make a guarantee claim towards the new-building shipyard.Advantage of the service is the potential compensation in comparison to the normal few drums of paint. Moreover, the report also serves as a tool for the superintendent, to give him a detailed picture of the vessel paint condition, to support his considerations for remedial action.
          "
        />
      </Helmet> 
      <BannerNBPS />
      <DescNBPS />
    </>
  );
};

export default NBSurvey;