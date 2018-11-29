import React from 'react';
import Phoq from '../../Resources/img/bt.JPG';


const Consulting = () => {
  return (
    <div className="about-con">
    <div className="about-text-con">
      <h2>Consulting. Let Us Help You With Corrosion Problems.</h2>
      <p><strong>Corrosion Issues</strong> </p><p><strong>Corrosion Prevention</strong> </p><p><strong>Maintenance Plan</strong> </p><p><strong>Plan Inspections</strong></p>
      <p>The cost for neglecting corrosion in your fleet is likely to increase each year. These corrosion issues may well result into earlier drydocking schedule for your ship once the tanks are found in "POOR" condition according to IMO standards and as observed by classification societies. If these issues are bothering you, then we can sit down with you and discuss various solutions to help tackle the corrosion damages. </p>
      <p>Taking the proper steps in preventive maintenance is very important in ensuring that your fleet maintain proper coating standards throughout their service. In JMC with our extensive experience, we can help you come up with the proper investigation and research which may well result into a fully implementable corrosion prevention plan for your fleet. </p>
    </div>
    <div className="about-pic-con">
      <img src={Phoq} alt="phq" width="100%" height="315" />
    </div >
    </div>
  );
};

export default Consulting;