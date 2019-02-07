import React from 'react';
 
const Topic = () => {
  return (
    <div className="topic_section_style" >
      <div className="title" >
        <div className="title-text" >
          <h1>About Us</h1>
        </div>
        <div className="title-underline"></div>
      </div>

      
      <div className="topic_container" style={{ marginTop: '2em' }} >
        <p>
        JMC Limited is an expert service provider for corrosion control, preventive maintenance and consultancy in the marine industry. It started operations within the last 2 years and have successfully completed and helped many major ship owners with regards to corrosion control in their fleet.
        </p>
        <p>
        The cost of our service is predictable as it is based on a system with day rates for the duration of the dry-docking and compared to the cost of many service engineers and technicians, our rate is low. We are on 24/7 for same day rate. Our main objective is to elevate the quality of the entire surface treatment process by foresight and control. This results in many savings for the ship owner and quality elevation which will be reflected positively on the future operating budget of the vessel.
        </p>
      </div>

    </div>
  );
};

export default Topic;