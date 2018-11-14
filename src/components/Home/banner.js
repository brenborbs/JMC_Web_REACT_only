import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    
    <div className="banner">
    <div className="banner-title">
      <h1 className="banner-text">JMC Limited</h1>
      <div className="banner-underline">Corrosion Experts 24/7</div>
      <div className="text-center">
      <Link to="/about_us" className="btn btn-warning" >Explore</Link>
    </div> 
    </div>
  </div>

  );
};

export default Banner;
