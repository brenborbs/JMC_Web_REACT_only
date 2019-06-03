import React  from 'react';
import Banner from './banner';
import Desc from './desc';
import Helmet from 'react-helmet';

 const OverviewPS =() => {
  
    return (
      <>
        <Helmet>
        <title>JMC Limited - Services/Pre-docking Surveys</title>
        <meta 
        name="Pre-docking survey" 
        content="The extent of the corrosion may be unknown but with our expertise, we can do the survey for you." />
        <meta
          name="tank surveys, corrosion assestment, paint consumption calculation, shipyard negotiation"
          content="The proper planning process of a dry-docking should entail a pre-docking paint survey.During the survey we will perform inspection of all available tanks and exterior areas. The inspection will result in a comprehensive report. The report will give the superintendent a detailed “picture” of the condition of the inspected areas, with correct extent, degree of breakdown and professional suggestions to surface treatment.The report will serve as the guideline during initial owner/yard scope of work discussions, thereby ensure that no change orders or extra cost will occur during the dry-docking."
        />
      </Helmet> 
        <Banner />
        <Desc />
      </>
    )
  }


export default OverviewPS;