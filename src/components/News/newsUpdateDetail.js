import React from 'react';
import Helmet from 'react-helmet';
import { Facebook, Twitter, Linkedin, Whatsapp } from 'react-social-sharing';

const NewsUpdateDetail = ({ newsUpdate }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>JMC Limited/news/update/{newsUpdate.title}</title>
        <meta name={newsUpdate.bodOne} content={newsUpdate.bodTwo} />
      <meta
        name={newsUpdate.bodThree}
        content={newsUpdate.bodFour}
      />
      </Helmet> 
    <div className="post-detail-content"> 

	<div className="summary">
    <img 
      className="featurette-image img-fluid mx-auto" 
      src={`${newsUpdate.imgOne}`} alt="feat" style={{ width: '100%' }} /> 
	</div>

  <div className="intro">
		<h1 className="post-title">{newsUpdate.title}</h1>
    <div className="news-date" >
    <p>{newsUpdate.date} | {newsUpdate.author}</p>
    </div>
	</div>


	<div className="post-content">
  <p>{newsUpdate.bodOne}</p>
    <p>{newsUpdate.bodTwo}</p>

    <div style={{ margin: '40px' }} >
    <img 
      className="featurette-image img-fluid mx-auto" 
      src={`${newsUpdate.imgTwo}`} alt={newsUpdate.title} 
      style={{ width: '100%'}} 
      />
      <p><em>{newsUpdate.descImgTwo}</em></p>
    </div>
    
    <p>{newsUpdate.bodThree}</p>
    <div style={{ margin: '40px' }} >
    <img 
      className="featurette-image img-fluid mx-auto" 
      src={`${newsUpdate.imgThree}`} alt={newsUpdate.title} 
      style={{ width: '100%'}} 
      />
      <p><em>{newsUpdate.descImgThree}</em></p>
    </div>

    <p>{newsUpdate.bodFour}</p>
    <div style={{ margin: '40px' }} >
    <img 
      className="featurette-image img-fluid mx-auto" 
      src={`${newsUpdate.imgFour}`} alt={newsUpdate.title} 
      style={{ width: '100%'}} 
      />
      <p><em>{newsUpdate.descImgFour}</em></p>
    </div>

	</div>
      <div className="story-container" >
          <h4>Share this story</h4>
      <Facebook solidcircle big link={`https://jmc-limited.com/news/update/${newsUpdate.id}`}
      title={`https://jmc-limited.com/news/update/${newsUpdate.title}`}
      />
      <Twitter solid big message="Share this article" link={`https://jmc-limited.com/news/update/${newsUpdate.id}`}/>
      <Linkedin solidcircle big message="Share this article" link={`https://jmc-limited.com/news/update/${newsUpdate.id}`}/>
      <Whatsapp solid big message="Share on Whatsapp" link={`https://jmc-limited.com/news/update/${newsUpdate.id}`}/>
      
      </div>
  </div>
  </React.Fragment>
  );
};

export default NewsUpdateDetail;