import React  from 'react';
import Banner from './banner';
import Detail from './detail';
import Pie from './pie';
import Sample from '../Sample';
import Helmet from 'react-helmet';

 const Service =() => {
  
    return (
      <>
        <Helmet>
        <title>JMC Limited/Services</title>
        <meta 
        name="Our Expertise - Your Solutions" 
        content="As your full service professional corrosion control, consulting and marine inspection company - we are there for you during all stages of the project." />
        <meta
          name="Cause for Paint Defects - Why?"
          content="According to studies and research in corrosion and having witnessed first hand, 85% of paint defects found on-board the ship are caused by POOR surface preparation leaving the 15% to 'Other' causes. Having this in mind, our priority would always start at surface preparation and ends until the last coating has been applied. Ensuring a concrete foundation for corrosion control"
        />
        <meta
          name="Proper Surface Preparation Matters"
          content="Based on our experience, while using handtools may be low cost, however as shown in the graph, we could see that the surface preparation result is rather poor which leads to high probability of coating failure as the ship ages. On the other hand, surface preparation through different blasting methods are more efficient which lessens the probability of an early coating failure on the ship areas."
        />
      </Helmet> 
        <Banner />
        <Pie />
        <Detail />
        <Sample />
      </>
    )
  }


export default Service;