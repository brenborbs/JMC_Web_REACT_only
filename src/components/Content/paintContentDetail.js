import React from 'react';
import Helmet from 'react-helmet';
import { 
  FacebookShareButton, 
  FacebookIcon, 
  FacebookShareCount,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
  WhatsappShareButton,
  WhatsappIcon
   
} from 'react-share';

const PaintContentDetails = ({paint}) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>JMC Limited/blog/{paint.title}</title>
        <meta 
        name={paint.usage} 
        content={paint.prep} />
      <meta
        name={paint.summary}
        content={paint.application}
      />
      </Helmet>
      
    <div className="post-detail-content" >
    
    <div className="intro">
		<h1 className="post-title">{paint.title}</h1>
	  </div>

    <div className="post-content">

      <p> {paint.usage}</p>
      <p> {paint.prep}</p>
      <img 
      className="featurette-image img-fluid mx-auto" 
      src={`${paint.photo}`} alt="paint" style={{ width: '100%' }} />
      <p style={{ fontSize: '9px' }} >{paint.web}</p>
      <div className="summary">
		  <p>{paint.summary}</p>
	    </div>
      <p> {paint.application}</p>
    </div>
        <div className="story-container">
        <h4>Share this story</h4>

        <div className="Demo__container" >
              <div className="Demo__some-network">
                  <FacebookShareButton
                    url={`https://jmc-limited.com/blog/${paint.id}`}
                    quote={paint.title}
                    className="Demo__some-network__share-button">
                    <FacebookIcon
                      size={32}
                      round={false}
                      />
                  </FacebookShareButton>
                  <FacebookShareCount
                    url={`https://jmc-limited.com/blog/${paint.id}`}
                    className="Demo__some-network__share-count">
                    {count => count}
                  </FacebookShareCount>
              </div>
              <div className="Demo__some-network">
                  <TwitterShareButton
                    url={`https://jmc-limited.com/blog/${paint.id}`}
                    quote={paint.title}
                    className="Demo__some-network__share-button">
                    <TwitterIcon
                      size={32}
                      round={false}
                      />
                  </TwitterShareButton>
              </div>
              <div className="Demo__some-network">
                <LinkedinShareButton
                  url={`https://jmc-limited.com/blog/${paint.id}`}
                  windowWidth={750}
                  windowHeight={600}
                  className="Demo__some-network__share-button">
                  <LinkedinIcon
                    size={32}
                    round={false} />
                </LinkedinShareButton>
              </div>
              <div className="Demo__some-network">
                <EmailShareButton
                  url={`https://jmc-limited.com/blog/${paint.id}`}
                  subject={paint.title}
                  body="body"
                  className="Demo__some-network__share-button">
                  <EmailIcon
                    size={32}
                    round={false} />
                </EmailShareButton>
                </div>
                <div className="Demo__some-network">
                <WhatsappShareButton
                  url={`https://jmc-limited.com/blog/${paint.id}`}
                  title={paint.title}
                  separator=":: "
                  className="Demo__some-network__share-button">
                  <WhatsappIcon size={32} round={false} />
                </WhatsappShareButton>

                <div className="Demo__some-network__share-count">
                  &nbsp;
                </div>
              </div>



            </div>

        </div>
    </div>
    </React.Fragment>
  );
};

export default PaintContentDetails;