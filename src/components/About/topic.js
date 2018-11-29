import React from 'react';
import ReactPlayer from 'react-player';

const Topic = () => {
  return (
    <div className="topic_section_style" >
      <div className="title" >
        <div className="title-text" >
          <h1>About Us</h1>
        </div>
        <div className="title-underline"></div>
      </div>

      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://youtu.be/UBOJ9UhlBnc'
          width='100%'
          height='100%'
        />
      </div>

      <div className="topic_container" style={{ marginTop: '2em' }} >
        <p>
        JMC Limited is an expert service provider for corrosion control, preventive maintenance and consultancy in the marine industry. It started operations within the last 2 years and have successfully completed and helped many major ship owners with regards to corrosion control in their fleet.
        </p>
        <p>
        The cost of our service is predictable as it is based on a system with day rates for the duration of the dry-docking and compared to the cost of many service engineers and technicians, our rate is low. We are on 24/7 for same day rate. Our main objective is to elevate the quality of the entire surface treatment process by foresight and control. This results in many savings for the ship owner and quality elevation which will be reflected positively on the future operating budget of the vessel.
        </p>
        <p>
        During every process in coating operations, we will ensure that test areas of required surface preparation standard is agreed prior to job start. This leaves less space for any arguments during the process. We will monitor air-less spray and make sure sprayers are using wet-film gauges, to ensure a uniform paint application and avoid excessive over-spray. We will make proper physical paint thickness measurements between coats and push for corrective action in case the thickness are not complying with each coat of the specification.
        </p>

      </div>

    </div>
  );
};

export default Topic;