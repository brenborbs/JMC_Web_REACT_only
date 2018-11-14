import React from 'react';
import { Link } from 'react-router-dom';
import Phoq from '../../Resources/img/dda.JPG';


const Dry_Dock = () => {
  return (
    <div className="about-con">
    <div className="about-text-con">
      <h2>Dry Dockings. We Are Here For You</h2>
      <p><strong>Project Management</strong> </p><p><strong>Shipyard Meetings</strong> </p><p><strong>Actual Paint Control</strong> </p><p><strong>Paint Equipment Check</strong></p>
      <p><strong>Paint Maintenance Seminars</strong></p>
      <p><strong>On-Board Tutoring</strong></p>
      <p>During drydocking, we will help you in managing the hull treatment and painting operations during the period. We will be on standby and available 24/7 , as some of the shipyards worked in 2 shifts. Our inspector will be there observing the whole activity, ensuring correct surface preparation and attending shipyard meetings, discussing and giving solutions through-out the whole process.</p>
      <p>Many times, it has been our experience that paint consumption delivered on site, at times may be lacking or even more than enough but still the owner has to pay for the excess consumption. Our inspectors will control and will check the paint equipment prior starting any spray paintin applications. This is to ensure proper actual paint consumption has been monitored and moreover, our inspectors will guide the paint applicators to use Wet Film Thickness during the application to avoid excess paint consumption and defects all along.</p>
      <Link to="/services" >All Services</Link>
    </div>
    <div className="about-pic-con">
      <img src={Phoq} alt="phq" width="100%" height="315" />
    </div >
    </div>
  );
};

export default Dry_Dock;