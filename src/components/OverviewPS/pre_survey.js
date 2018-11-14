import React from 'react';
import { Link } from 'react-router-dom';
import Phoq from '../../Resources/img/fdeck.JPG';


const Pre_Survey = () => {
  return (
    <div className="about-con">
    <div className="about-text-con">
      <h2>Pre Docking Surveys. We will check it for you.</h2>
      <p><strong>Tank Surveys</strong> </p><p><strong>Corrosion Assestment</strong> </p><p><strong>Paint Consumption Calculation</strong> </p><p><strong>Shipyard Negotiation</strong></p>
      <p>Before your ship will enter it's dry docking schedule, several tanks in vessel will need to be check in order to know which tanks will be treated during the dry docking period. The extent of the corrosion may be unknown but with our experties, we can do the survey for you and come up with actual corrosion assestment on the tanks. This assestment will serve as your guide during the drydocking, thus giving you savings as most shipyards will mostly charge you in excess for some areas which can be easily repaired by your crew.</p>
      <p>Prior entering the dry docking schedule, paint manufacturers will submit their paint consumption calculations according to their estimates. Usually, the calculations has been done on their offices without even knowing the actual situation aboard your ship. In JMC, we will conduct an all around pre-assestment survey on the entire hull plating and give you our calculations basing on what we have seen on your ship and not by random guesswork.</p>
      <Link to="/services" >All Services</Link>
    </div>
    <div className="about-pic-con">
      <img src={Phoq} alt="phq" width="100%" height="315" />
    </div >
    </div>
  );
};

export default Pre_Survey;