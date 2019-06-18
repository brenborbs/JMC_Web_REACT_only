import React from "react";
import Experties from "./experties";
import Address from "./address";
import Sponsor from "./sponsor";
import Helmet from "react-helmet";
import NewsBar from "../../Common/newsBar";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>JMC Limited/Contact</title>
        <meta
          name="Drydocking Supervision"
          content="We make savings from the initial trimming of the paint specification and work scope, to the last steps of dry-docking. We elevate the quality of the entire surface treatment process by foresight and constant care. In total, Owner Superintendent will be able to concentrate on all other matters belonging to the work-scope of a dry-docking job, when JMC is taking proper care of the surface treatment."
        />
        <meta
          name="Guarantee Tank Surveys"
          content="The rate at which corrosion will go on the tanks will become unpredictable once proper control has been neglected. JMC with it's vast experience can give you full service in checking the tanks according to the latest IMO guidelines and in-service regulations. In the end, you will get a quality service and issued with concrete final reports that will serve as a guide for your crew."
        />
        <meta
          name="Ship Surveys"
          content="Marine corrosion in general will continue to cause damages in your ships hull whenever proper control has been neglected. JMC can help you solve this gap by doing practical surveys in all areas in your ship and providing you with detailed reports with cost control that may serve at your best interest. In this way, you get savings in your maintenance costs.."
        />
        <meta
          name="Crew Paint Seminar"
          content="JMC will perform a paint maintenance seminar for the relevant crew, to instruct them in proper paint maintenance, use of tools, general paint knowledge, surface preparation and paint application. We will also review products in relation to OBM manual and areas intended, check products shelf life, check PPA and facilities. Finally, we will check the surface treatment tools and suitability to the work at hand."
        />
      </Helmet>
      <Experties />
      <NewsBar />
      <Address />
      <Sponsor />
    </>
  );
};

export default Contact;
