import React from 'react';

const FeaturedContentDetail = ({ feature }) => {
  return (
    <React.Fragment> 
    <div className="post-detail-content"> 

  <div className="intro">
		<h1 className="post-title">{feature.title}</h1>
	</div>

	<div className="byline">
		<div className="pic-info" >
      <img src={feature.authorPic} alt="author" className="avatar" />
      <p>{feature.author}</p>
    </div>
	</div>

	<div className="summary">
		<p><strong>{feature.desc}</strong></p>
	</div>
	
	<div className="post-content">
		
		<p>{feature.parOne}</p> 
    <p>{feature.parTwo}</p>
    <p>{feature.parThree}</p>
    <img 
      className="featurette-image img-fluid mx-auto" 
      src={`${feature.img}`} alt="feat" style={{ width: '100%' }} /> 
    <p><em>{feature.parFour}</em></p>
    <p>{feature.parFive}</p>
    <p>{feature.parSix}</p>
    <p>{feature.parSeven}</p>
    <p>{feature.parEight}</p>
    <p>{feature.parNine}</p>
    <p>{feature.parTen}</p>
    <p>{feature.parEleven}</p>
	</div>
  </div>
  </React.Fragment>
  );
};

export default FeaturedContentDetail ;