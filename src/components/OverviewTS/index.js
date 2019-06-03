import React from 'react';
import Banner from './banner';
import Desc from './desc';
import Helmet from 'react-helmet';


const OverviewTS = () => {
  return (
    <>
      <Helmet>
        <title>JMC Limited - Services/Tank Surveys</title>
        <meta 
        name="Tank surveys" 
        content="We will perform the tank survey prior any class surveys and provide you with an extensive report" />
        <meta
          name="ballast tanks, fresh water tanks, engine room tanks, fore and aft peak tanks"
          content="As your ship begins to age, existing paint breakdown in the tanks will need to be monitored and checked, thus giving you information on the need and extent of breakdown, for considerations as to remedial action.In JMC, we will do the tank survey prior any class surveys and provide you with an extensive report on the coating breakdown and rectification suggestions.If the tank condition of the tanks are POOR as per IMO tank guidelines, we will help you in supervising the tank repairs with the contractors, ensuring the necessary and proper rectification with the budget in mind. "
        />
      </Helmet> 
       <Banner />
        <Desc />
    </>
  );
};

export default OverviewTS;