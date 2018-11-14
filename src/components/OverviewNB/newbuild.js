import React from 'react';
import { Link } from 'react-router-dom';
import Phoq from '../../Resources/img/bt.JPG';


const New_Build = () => {
  return (
    <div className="about-con">
    <div className="about-text-con">
      <h2>New Buildings. Helping You Reach Proper Standards Right From The Start.</h2>
      <p><strong>Pre-building Meetings</strong> </p><p><strong>Shipyard Selection</strong> </p><p><strong>IMO PSPC Ballast Tank</strong> </p><p><strong>Construction Inspections</strong></p>
      <p>With the recent trends in newbuildings, the industry calls for building even higher tonnages and bigger vessels. The room for corrosion to occur in premature stages are more likely to occur if proper painting controls has not been done during production stage of the ship. In JMC with our experience inspectors, we can provide a full team on-site wich can potentially help you in avoiding risks of premature coating failure once the vessel has started it's service. </p>
      <p>It is very well known that according to studies 80% of coating failure usually occurs due to poor surface preparation. This happens during construction stage of the vessel which will likely affect the ship during her entire life in service. To avoid this pitfall, we can help you with our experties in this field and ensure getting your vessels get the proper standards from the shipyards. </p>
      <Link to="/services"  >All Services</Link>
    </div>
    <div className="about-pic-con">
      <img src={Phoq} alt="phq" width="100%" height="315" />
    </div >
    </div>
  );
};

export default New_Build;