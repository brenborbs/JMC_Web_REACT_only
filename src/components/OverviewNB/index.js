import React  from 'react';
import Banner from './banner';
import Desc from './desc';
import Helmet from 'react-helmet';

 const OverviewTS =() => {
  
    return (
      <>
        <Helmet>
        <title>JMC Limited/Services/New buildings</title>
        <meta 
        name="new buildings" 
        content="We have supported many shipowners to incorporate viable corrosion solutions to their new vessels" />
        <meta
          name="Development, review and negotiation of newbuilding contracts and specification,Plans and drawings approval, makers evaluation and selection, Attendance to model tests and manufacturers’ premises,Site office set-up and ship construction supervision,Final assessment, post-delivery guarantee and claims settlement"
          content="With our strong communication and relationships with many shipbuilders worldwide. Having a dedicated team of highly trained and experienced professionals enables us to handle various types of newbuilding, drydockings and conversion projects at your disposal and assist you from pre-contract negotiations to vessel delivery and beyond, full service guarantee.,Starting from design to steel cutting, blocks stage to launching, after-launching to final outfitting and then finally, towards sea-trial and delivery. We can help you with our expertise in this field and ensure getting your vessels get the proper standards from the shipyards. "
        />
      </Helmet> 
        <Banner />
        <Desc />
      </>
    )
  }


export default OverviewTS;