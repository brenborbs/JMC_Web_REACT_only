import React from 'react';
import Phoq from '../../Resources/img/bt.JPG';

const Paint_Tech = () => {
  return (
    <div className="about-con">
    <div className="about-text-con">
      <h2>Paint Technology. We share our knowledge with you.</h2>
      <p><strong>Paint Seminars</strong> </p><p><strong>Paint Trainings</strong> </p><p><strong>Inspection Guidelines</strong> </p><p><strong>Corrosion Study</strong></p>
      <p>Be it during the course of the drydocking, our inspectors can give a brief painting seminar to your crew complete with slides and animations to teach them about the proper ways to repair paint damages in your ship. As they say, information is key and having the most knowledgeable crew in corrosion prevention will help you get savings in your vessels maintenance program. </p>
      <p>The industry is quickly changing and newer technologies in marine corrosion prevention are introduced daily. With our help, we can guide you in implementing and teaching you these new methods and apply them to your existing fleet.</p>
      
    </div>
    <div className="about-pic-con">
      <img src={Phoq} alt="phq" width="100%" height="315" />
    </div >
    </div>
  );
};

export default Paint_Tech;