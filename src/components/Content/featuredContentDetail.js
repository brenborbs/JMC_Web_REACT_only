import React from 'react';
import { Facebook, Twitter, Linkedin, Whatsapp } from 'react-social-sharing';

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
		<p>{feature.desc}</p>
	</div>
	
	<div className="post-content">
		
		<p>{feature.parOne}</p> 
    <p>{feature.parTwo}</p>
    <p>{feature.parThree}</p>
    <img 
      className="featurette-image img-fluid mx-auto" 
      src={`${feature.img}`} alt="feat" style={{ width: '100%' }} /> 
    <p style={{ marginTop: '18px' }} ><em>{feature.parFour}</em></p>
    <p>{feature.parFive}</p>
    <p>{feature.parSix}</p>
    <p>{feature.parSeven}</p>
    <p>{feature.parEight}</p>
    <p>{feature.parNine}</p>
    <p>{feature.parTen}</p>
    <p>{feature.parEleven}</p>
	</div>
      <div className="story-container" >
          <h4>Share this story</h4>
      <Facebook solidcircle big link={`https://jmc-limited.com/blog/feature/${feature.id}`}/>
      <Twitter solid big message="Read our article" link={`https://jmc-limited.com/blog/feature/${feature.id}`}/>
      <Linkedin solidcircle big message="Read our article" link={`https://jmc-limited.com/blog/feature/${feature.id}`}/>
      <Whatsapp solid big message="Share on Whatsapp" link={`https://jmc-limited.com/blog/feature/${feature.id}`}/>
      </div>
  </div>
  </React.Fragment>
  );
};

export default FeaturedContentDetail ;