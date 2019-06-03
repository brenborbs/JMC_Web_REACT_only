import React  from 'react';
import DryDock from './dry_dock';
import BannerDD from './banner';
import Helmet from 'react-helmet';

 const OverviewDD =() => {
  
    return (
      <>
        <Helmet>
        <title>JMC Limited/Services/Drydockings</title>
        <meta 
        name="Dry-Docking" 
        content="By constant care and foresight supervision, we can help you get potential paint and material savings during dry docking of your vessel." />
        <meta
          name="Project Management,Shipyard meetings,actual paint control,paint equipment check,paint maintenance seminars, on-board tutoring"
          content="Proper customization of the paint specification and planning of the dry-docking surface treatment process will be the stepping stone for initial savings and a quality improvement which will facilitate further savings during vessel operation.To use the correct products, and only necessary amounts are part of our agenda, as the focus on savings and quality from our clients is ever increasing.By constant care and foresight supervision and correct intervention, during the dry-docking surface treatment process, the potential for paint and material savings, and further improvement of the quality is huge."
        />
      </Helmet> 
        <BannerDD />
        <DryDock />
      </>
    )
  }


export default OverviewDD;
