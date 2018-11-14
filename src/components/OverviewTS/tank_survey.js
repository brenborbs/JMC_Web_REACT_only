import React from 'react';
import { Link } from 'react-router-dom';
import Phoq from '../../Resources/img/tank2.JPG';


const Tank_Survey = () => {
  return (
    <div className="about-con">
    <div className="about-text-con">
      <h2>Tank Survey. Actual Damage Assestment For Your Guidance.</h2>
      <p><strong>Ballast Tanks</strong> </p><p><strong>Fresh Water Tanks</strong> </p><p><strong>Engine Room Tanks</strong> </p><p><strong>Fore and Aft Peak Tanks</strong></p>
      <p>As your ship begins to age, existing paint damages inside the tanks will need to be monitored and checked, thus giving you information if when the tanks may need to be treated. Recent IMO guidelines are also required that the tanks need to be in "GOOD" condition to get acceptance certificates from class surveys. In JMC, we will do the tank survey prior any class surveys and provide you with an extensive report on the damages and rectification estimates.  </p>
      <p>If the situation of the tanks are in "POOR" condition as per IMO tank guidelines, we will help you in supervising the tank repairs with the contractors, ensuring proper quality rectification at a reasonable cost.</p>
      <Link to="/services" >All Services</Link>
    </div>
    <div className="about-pic-con">
      <img src={Phoq} alt="phq" width="100%" height="315" />
    </div >
    </div>
  );
};

export default Tank_Survey;