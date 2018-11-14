import React from 'react';
import Aidalog from '../../Resources/img/aidalogo.jpg';
import { Link } from 'react-router-dom';

const Review = () => {
  return (
    <div className="customers" >
      <div className="title">
      <h1 className="title-text">Client Reviews</h1>
      <div className="title-underline"></div>
    </div>

    <div className="customers-center">

<div className="customer">
        <img src={Aidalog} alt="PPO"/>
        <h3>Thomas Piller</h3>
        <h5>Ship Manager, Fleet Team 2 Cruise Execution (AIDA) </h5>
        <p>One more time I just want to praise the great performance of your guys onboard AIDAaura. They did a brilliant job all over the past months. I highly recommend your good company within our fleet. 
      </p>
      </div>
      
      <div className="customer">
        <img src={Aidalog} alt="PPI" />
        <h3>Torsten Beuermann</h3>
        <h5>Chief Engineer, AIDAaura</h5>
        <p>The JMC team is very well set and working independently, accurate and without any problems. They deliver very good results and as well their commitment to their job is very obvious. from my side, all works which have been performed by them are spotless from good quality and if needed, they are always welcomed again. As well it should be stated that they really behave very well while on-board and did respect all regulatory and procedural requirements to the full extent. All in all it was a pleasure to work with them here on our good AIDAaura.</p>
      </div>
      <div className="customer">
        <img src={Aidalog} alt="PPP"  />
        <h3>Mario Fois</h3>
        <h5>Staff Captain, AIDAaura</h5>
        <p>Very good performance of your team. I'm satisfied of all tank works they have done and always on time and precise. Maksym is a good leader and always provided feedback and suggestions.Also want to highlight the good behaviour in the public spaces and cooperation with the crew.</p>
      </div>
    </div>
    <div className="section-btn">
      <Link to="/services" >Explore More</Link>
      
    </div>
  </div>
  );
};

export default Review;