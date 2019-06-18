import React from "react";
import Helmet from "react-helmet";
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
} from "react-share";
import { Facebook, Twitter, Linkedin, Whatsapp } from "react-social-sharing";
import CasesCard from "../../CasesCard/CasesEntry";
import NewsCard from "../../NewsCard/EntryNewsCard";

const FeaturedContentDetail = ({ feature }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>JMC Limited/blog/feature/{feature.title}</title>
        <meta name={feature.desc} content={feature.parOne} />
        <meta name={feature.parTwo} content={feature.parThree} />
        <meta name={feature.parFour} content={feature.parFive} />
        <meta name={feature.parSix} content={feature.parSeven} />
        <meta name={feature.parEight} content={feature.parNine} />
        <meta name={feature.parTen} content={feature.parEleven} />
      </Helmet>

      <div className="post-detail-content">
        <div className="intro">
          <h1 className="post-title">{feature.title}</h1>
        </div>

        <div className="byline">
          <div className="pic-info">
            <img src={feature.authorPic} alt="author" className="avatar" />
            <p>{feature.author}</p>
          </div>
        </div>

        <div className="sm-social-share-wrapper">
          <div className="small-soc-buttons">
            <Facebook
              solidcircle
              small
              link={`https://jmc-limited.com/blog/feature/${feature.id}`}
            />
            <Twitter
              solidcircle
              small
              message="Share this article"
              link={`https://jmc-limited.com/blog/feature/${feature.id}`}
            />
            <Linkedin
              solidcircle
              small
              message="Share this article"
              link={`https://jmc-limited.com/blog/feature/${feature.id}`}
            />
            <Whatsapp
              solidcircle
              small
              message="Share on Whatsapp"
              link={`https://jmc-limited.com/blog/feature/${feature.id}`}
            />
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
            src={`${feature.img}`}
            alt="feat"
            style={{ width: "100%" }}
          />
          <p style={{ marginTop: "18px" }}>
            <em>{feature.parFour}</em>
          </p>
          <p>{feature.parFive}</p>
          <p>{feature.parSix}</p>
          <p>{feature.parSeven}</p>
          <p>{feature.parEight}</p>
          <p>{feature.parNine}</p>
          <p>{feature.parTen}</p>
          <p>{feature.parEleven}</p>
        </div>
        <div className="story-container">
          <h4>Share this story</h4>
          <div className="Demo__container">
            <div className="Demo__some-network">
              <FacebookShareButton
                url={`https://jmc-limited.com/blog/feature/${feature.id}`}
                quote={feature.title}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round={false} />
              </FacebookShareButton>
              <FacebookShareCount
                url={`https://jmc-limited.com/blog/feature/${feature.id}`}
                className="Demo__some-network__share-count"
              >
                {count => count}
              </FacebookShareCount>
            </div>
            <div className="Demo__some-network">
              <TwitterShareButton
                url={`https://jmc-limited.com/blog/feature/${feature.id}`}
                quote={feature.title}
                className="Demo__some-network__share-button"
              >
                <TwitterIcon size={32} round={false} />
              </TwitterShareButton>
            </div>
            <div className="Demo__some-network">
              <LinkedinShareButton
                url={`https://jmc-limited.com/blog/feature/${feature.id}`}
                windowWidth={750}
                windowHeight={600}
                className="Demo__some-network__share-button"
              >
                <LinkedinIcon size={32} round={false} />
              </LinkedinShareButton>
            </div>
            <div className="Demo__some-network">
              <EmailShareButton
                url={`https://jmc-limited.com/blog/feature/${feature.id}`}
                subject={feature.title}
                body="body"
                className="Demo__some-network__share-button"
              >
                <EmailIcon size={32} round={false} />
              </EmailShareButton>
            </div>
            <div className="Demo__some-network">
              <WhatsappShareButton
                url={`https://jmc-limited.com/blog/feature/${feature.id}`}
                title={feature.title}
                separator=":: "
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round={false} />
              </WhatsappShareButton>

              <div className="Demo__some-network__share-count">&nbsp;</div>
            </div>
          </div>
        </div>
        <h6>Read our case studies</h6>
        <CasesCard />
        <h6 style={{ marginTop: "20px" }}>Featured News at JMC Limited</h6>
        <NewsCard />
      </div>
    </React.Fragment>
  );
};

export default FeaturedContentDetail;
