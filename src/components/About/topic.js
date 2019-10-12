import React from "react";

const Topic = () => {
  return (
    <div className="topic_section_style">
      <div className="title">
        <div className="title-text">
          <h1 style={{ paddingTop: "1.8em" }}>About Us</h1>
        </div>
        <div className="title-underline" />
      </div>
      <div className="topic_container" style={{ marginTop: "2em" }}>
        <p>
          JMC Limited is an expert service provider for corrosion control,
          preventive maintenance and consultancy in the marine industry. JMC
          Limited was formed in 2017 and is based on the founders more than 25
          years in the corrosion mitigation industry. We have successfully
          completed and helped many major ship owners with regards to corrosion
          control in their fleet.
        </p>
        <p>
          Our main objective is to elevate the quality of the entire surface
          treatment process by foresight and control. This results in many
          savings for the ship owner and quality elevation which will be
          reflected positively on the future operating budget of the vessel.
        </p>
      </div>
    </div>
  );
};

export default Topic;
