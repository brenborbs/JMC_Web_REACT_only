import React from "react";
import Helmet from "react-helmet";
import Calendar from "../../Common/Calendar.js";
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
import NewsCard from "../../NewsCard/EntryNewsCard";
import NewsUpdate from "../../UpdateCard/EntryUpdateNews";
import BlogCard from "../../BlogCard/BlogEntry";

const PaintContentDetails = ({ paint }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>JMC Limited/blog/{paint.title}</title>
        <meta name={paint.usage} content={paint.prep} />
        <meta name={paint.summary} content={paint.application} />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="mt-4">{paint.title}</h1>
            <p className="lead">Category: {paint.category}</p>
            <hr />
            <img
              className="img-fluid rounded"
              src={`${paint.photo}`}
              alt={paint.title}
            />
            <hr />
            <p className="lead">{paint.usage}</p>
            <p>{paint.summary}</p>
            <p>{paint.application}</p>

            <div className="media mb-4">
              <div className="media-body">
                <h4>Share this story</h4>
                <div className="Demo__container">
                  <div className="Demo__some-network">
                    <FacebookShareButton
                      url={`https://jmc-limited.com/blog/${paint.id}`}
                      quote={paint.title}
                      className="Demo__some-network__share-button"
                    >
                      <FacebookIcon size={32} round={false} />
                    </FacebookShareButton>
                    <FacebookShareCount
                      url={`https://jmc-limited.com/blog/${paint.id}`}
                      className="Demo__some-network__share-count"
                    >
                      {count => count}
                    </FacebookShareCount>
                  </div>
                  <div className="Demo__some-network">
                    <TwitterShareButton
                      url={`https://jmc-limited.com/blog/${paint.id}`}
                      quote={paint.title}
                      className="Demo__some-network__share-button"
                    >
                      <TwitterIcon size={32} round={false} />
                    </TwitterShareButton>
                  </div>
                  <div className="Demo__some-network">
                    <LinkedinShareButton
                      url={`https://jmc-limited.com/blog/${paint.id}`}
                      windowWidth={750}
                      windowHeight={600}
                      className="Demo__some-network__share-button"
                    > 
                      <LinkedinIcon size={32} round={false} />
                    </LinkedinShareButton>
                  </div>
                  <div className="Demo__some-network">
                    <EmailShareButton
                      url={`https://jmc-limited.com/blog/${paint.id}`}
                      subject={paint.title}
                      body="body"
                      className="Demo__some-network__share-button"
                    >
                      <EmailIcon size={32} round={false} />
                    </EmailShareButton>
                  </div>
                  <div className="Demo__some-network">
                    <WhatsappShareButton
                      url={`https://jmc-limited.com/blog/${paint.id}`}
                      title={paint.title}
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
            </div>
            <h6>Read our Featured Blog</h6>
            <BlogCard />
          </div>
          {/* column one end here */}
          {/* Sidebar Widgets column */}
          <div className="col-md-4">
            <div className="card my-4">
              <h6 className="card-header">Latest Update</h6>
              <div className="card-body">
                <NewsUpdate />
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
            {/* Last card ends here */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaintContentDetails;
