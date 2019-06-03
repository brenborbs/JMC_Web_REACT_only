import React from 'react';
import Helmet from 'react-helmet';
import { Facebook, Twitter, Linkedin, Whatsapp } from 'react-social-sharing';

const FeaturedContentDetail = ({ feature }) => {
  return (
    <React.Fragment> 
      <Helmet>
        <title>JMC Limited/blog/feature/{feature.title}</title>
        <meta 
        name={feature.desc} 
        content={feature.parOne} />
      <meta
        name={feature.parTwo}
        content={feature.parThree}
      />
      <meta
        name={feature.parFour}
        content={feature.parFive}
      />
      <meta
        name={feature.parSix}
        content={feature.parSeven}
      />
      <meta
        name={feature.parEight}
        content={feature.parNine}
      />
      <meta
        name={feature.parTen}
        content={feature.parEleven}
      />
      </Helmet> 

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

  <div className="sm-social-share-wrapper">
    <div className="small-soc-buttons">
    <Facebook solidcircle small link={`https://jmc-limited.com/blog/feature/${feature.id}`} 
    
    />
    <Twitter solidcircle small message="Share this article" link={`https://jmc-limited.com/blog/feature/${feature.id}`}/>
    <Linkedin solidcircle small message="Share this article" link={`https://jmc-limited.com/blog/feature/${feature.id}`}/>
    <Whatsapp solidcircle small message="Share on Whatsapp" link={`https://jmc-limited.com/blog/feature/${feature.id}`}/>
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
      <Twitter solid big message="Share this article" link={`https://jmc-limited.com/blog/feature/${feature.id}`}/>
      <Linkedin solidcircle big message="Share this article" link={`https://jmc-limited.com/blog/feature/${feature.id}`}/>
      <Whatsapp solid big message="Share on Whatsapp" link={`https://jmc-limited.com/blog/feature/${feature.id}`}/>
      </div>
  </div>
  </React.Fragment>
  );
};

export default FeaturedContentDetail ;