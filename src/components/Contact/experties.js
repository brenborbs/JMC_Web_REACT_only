import React from 'react';
import ImageFour from '../../Resources/img/de.JPG';
import ImageFive from '../../Resources/img/expd.JPG';
import ImageSix from '../../Resources/img/tank1.JPG';
import ImageSeven from '../../Resources/img/ddf.JPG';
 
const Experties = () => {
  return (
    <div className="exp-section_style" >
  
  <div className="title">
      <div className="title-text">
        <h1>expert solutions</h1>
      </div>
      <div className="title-underline"></div>
    </div>
    
    <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Drydocking Supervision</h2>
          <p className="lead">We make savings from the initial trimming of the paint specification and work scope, to the last steps of dry-docking. We elevate the quality of the entire surface treatment process by foresight and constant care. In total, Owner Superintendent will be able to concentrate on all other matters belonging to the work-scope of a dry-docking job, when JMC is taking proper care of the surface treatment.</p>
        </div>
        <div className="col-md-5">
          <img className="featurette-image img-fluid mx-auto" src={ImageSeven} alt="ship"/>
        </div>
      </div>

      <hr className="featurette-divider"/>

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">Guarantee Tank Surveys</h2>
          <p className="lead">The rate at which corrosion will go on the tanks will become unpredictable once proper control has been neglected. JMC with it's vast experience can give you full service in checking the tanks according to the latest IMO guidelines and in-service regulations. In the end, you will get a quality service and issued with concrete final reports that will serve as a guide for your crew. </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img className="featurette-image img-fluid mx-auto" src={ImageSix} alt="titan"/>
        </div>
      </div>

      <hr className="featurette-divider"/>

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Ship Surveys</h2>
          <p className="lead">Marine corrosion in general will continue to cause damages in your ships hull whenever proper control has been neglected. JMC can help you solve this gap by doing practical surveys in all areas in your ship and providing you with detailed reports with cost control that may serve at your best interest. In this way, you get savings in your maintenance costs.</p>
        </div>
        <div className="col-md-5">
          <img className="featurette-image img-fluid mx-auto" src={ImageFour} alt="alex"/>
        </div>
      </div>

      <hr className="featurette-divider"/>

      <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Crew Paint Seminar</h2>
            <p className="lead">JMC will perform a paint maintenance seminar for the relevant crew, to instruct them in proper paint maintenance, use of tools, general paint knowledge, surface preparation and paint application. We will also review products in relation to OBM manual and areas intended, check products shelf life, check PPA and facilities. Finally, we will check the surface treatment tools and suitability to the work at hand.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="featurette-image img-fluid mx-auto" src={ImageFive} alt="sam"/>
          </div>
        </div>
</div>
  );
};

export default Experties;