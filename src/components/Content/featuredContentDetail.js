import React from "react";
import Helmet from "react-helmet";
import Calendar from "../../Common/Calendar";
// import { Link } from "react-router-dom";
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

import CasesCard from "../../CasesCard/CasesEntry";
import NewsCard from "../../NewsCard/EntryNewsCard";
import UpdateCard from "../../UpdateCard/EntryUpdateNews";

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

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="mt-4">{feature.title}</h1>

            <div className="byline">
              <div className="pic-info">
                <img src={feature.authorPic} alt="author" className="avatar" />
                <p>{feature.author}</p>
              </div>
            </div>

            <hr />

            <p>Posted on April 04, 2019</p>

            <img
              src={`${feature.img}`}
              alt={feature.title}
              className="img-fluid rounded"
            />

            <hr />

            <p className="lead">{feature.desc}</p>
            <p>{feature.parOne}</p>
            <p>{feature.parTwo}</p>
            <p>{feature.parThree}</p>
            <p>{feature.parFive}</p>
            <p>{feature.parSix}</p>
            <p>{feature.parSeven}</p>
            <p>{feature.parEight}</p>
            <p>{feature.parNine}</p>
            <p>{feature.parTen}</p>
            <p>{feature.parEleven}</p>

            <div className="media mb-4">
              <div className="media-body">
                <div className="story-container">
                  <h4>Share this story</h4>
                  <div className="Demo__container">
                    <div className="Demo__some-network">
                      <FacebookShareButton
                        url={`https://jmc-limited.com/blog/feature/${
                          feature.id
                        }`}
                        quote={feature.title}
                        className="Demo__some-network__share-button"
                      >
                        <FacebookIcon size={32} round={false} />
                      </FacebookShareButton>
                      <FacebookShareCount
                        url={`https://jmc-limited.com/blog/feature/${
                          feature.id
                        }`}
                        className="Demo__some-network__share-count"
                      >
                        {count => count}
                      </FacebookShareCount>
                    </div>
                    <div className="Demo__some-network">
                      <TwitterShareButton
                        url={`https://jmc-limited.com/blog/feature/${
                          feature.id
                        }`}
                        quote={feature.title}
                        className="Demo__some-network__share-button"
                      >
                        <TwitterIcon size={32} round={false} />
                      </TwitterShareButton>
                    </div>
                    <div className="Demo__some-network">
                      <LinkedinShareButton
                        url={`https://jmc-limited.com/blog/feature/${
                          feature.id
                        }`}
                        windowWidth={750}
                        windowHeight={600}
                        className="Demo__some-network__share-button"
                      >
                        <LinkedinIcon size={32} round={false} />
                      </LinkedinShareButton>
                    </div>
                    <div className="Demo__some-network">
                      <EmailShareButton
                        url={`https://jmc-limited.com/blog/feature/${
                          feature.id
                        }`}
                        subject={feature.title}
                        body="body"
                        className="Demo__some-network__share-button"
                      >
                        <EmailIcon size={32} round={false} />
                      </EmailShareButton>
                    </div>
                    <div className="Demo__some-network">
                      <WhatsappShareButton
                        url={`https://jmc-limited.com/blog/feature/${
                          feature.id
                        }`}
                        title={feature.title}
                        separator=":: "
                        className="Demo__some-network__share-button"
                      >
                        <WhatsappIcon size={32} round={false} />
                      </WhatsappShareButton>

                      <div className="Demo__some-network__share-count">
                        &nbsp;
                      </div>
                    </div>
                  </div>
                </div>
                <h6>Read our case studies</h6>
                <CasesCard />
              </div>
            </div>
          </div>
          {/* Sidebar widgets column */}
          <div className="col-md-4">
            <div className="card my-4">
              <h6 className="card-header">Latest Update</h6>
              <div className="card-body">
                <UpdateCard />
              </div>
            </div>
            <div className="card my-4">
              <h6 className="card-header">Featured News</h6>
              <div className="card-body">
                <NewsCard />
              </div>
            </div>
            <div className="card my-4">
              <h6 className="card-header">Today's Date</h6>
              <div className="card-body">
                <Calendar />
              </div>
            </div>
            {/* Last Card ends here */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeaturedContentDetail;
