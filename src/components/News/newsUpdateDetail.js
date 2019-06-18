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
import CardNews from "../../NewsCard/EntryNewsCard";
import CasesCard from "../../CasesCard/CasesEntry";
import BlogCard from "../../BlogCard/BlogEntry";

const NewsUpdateDetail = ({ newsUpdate }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>JMC Limited/news/update/{newsUpdate.title}</title>
        <meta name={newsUpdate.bodOne} content={newsUpdate.bodTwo} />
        <meta name={newsUpdate.bodThree} content={newsUpdate.bodFour} />
      </Helmet>
      <div className="post-detail-content">
        <div className="summary">
          <img
            className="featurette-image img-fluid mx-auto"
            src={`${newsUpdate.imgOne}`}
            alt="feat"
            style={{ width: "100%" }}
          />
        </div>

        <div className="intro">
          <h1 className="post-title">{newsUpdate.title}</h1>
          <div className="news-date">
            <p>
              {newsUpdate.date} | {newsUpdate.author}
            </p>
          </div>
        </div>

        <div className="post-content">
          <p>{newsUpdate.bodOne}</p>
          <p>{newsUpdate.bodTwo}</p>

          <div style={{ margin: "40px" }}>
            <img
              className="featurette-image img-fluid mx-auto"
              src={`${newsUpdate.imgTwo}`}
              alt={newsUpdate.title}
              style={{ width: "100%" }}
            />
            <p>
              <em>{newsUpdate.descImgTwo}</em>
            </p>
          </div>

          <p>{newsUpdate.bodThree}</p>
          <div style={{ margin: "40px" }}>
            <img
              className="featurette-image img-fluid mx-auto"
              src={`${newsUpdate.imgThree}`}
              alt={newsUpdate.title}
              style={{ width: "100%" }}
            />
            <p>
              <em>{newsUpdate.descImgThree}</em>
            </p>
          </div>

          <p>{newsUpdate.bodFour}</p>
          <div style={{ margin: "40px" }}>
            <img
              className="featurette-image img-fluid mx-auto"
              src={`${newsUpdate.imgFour}`}
              alt={newsUpdate.title}
              style={{ width: "100%" }}
            />
            <p>
              <em>{newsUpdate.descImgFour}</em>
            </p>
          </div>
        </div>
        <div className="story-container">
          <h4>Share this story</h4>
          <div className="Demo__container">
            <div className="Demo__some-network">
              <FacebookShareButton
                url={`https://jmc-limited.com/news/update/${newsUpdate.id}`}
                quote={newsUpdate.title}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round={false} />
              </FacebookShareButton>
              <FacebookShareCount
                url={`https://jmc-limited.com/news/update/${newsUpdate.id}`}
                className="Demo__some-network__share-count"
              >
                {count => count}
              </FacebookShareCount>
            </div>
            <div className="Demo__some-network">
              <TwitterShareButton
                url={`https://jmc-limited.com/news/update/${newsUpdate.id}`}
                quote={newsUpdate.title}
                className="Demo__some-network__share-button"
              >
                <TwitterIcon size={32} round={false} />
              </TwitterShareButton>
            </div>
            <div className="Demo__some-network">
              <LinkedinShareButton
                url={`https://jmc-limited.com/news/update/${newsUpdate.id}`}
                windowWidth={750}
                windowHeight={600}
                className="Demo__some-network__share-button"
              >
                <LinkedinIcon size={32} round={false} />
              </LinkedinShareButton>
            </div>
            <div className="Demo__some-network">
              <EmailShareButton
                url={`https://jmc-limited.com/news/update/${newsUpdate.id}`}
                subject={newsUpdate.title}
                body="body"
                className="Demo__some-network__share-button"
              >
                <EmailIcon size={32} round={false} />
              </EmailShareButton>
            </div>
            <div className="Demo__some-network">
              <WhatsappShareButton
                url={`https://jmc-limited.com/news/update/${newsUpdate.id}`}
                title={newsUpdate.title}
                separator=":: "
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round={false} />
              </WhatsappShareButton>

              <div className="Demo__some-network__share-count">&nbsp;</div>
            </div>
          </div>
        </div>
        <h6>More Featured News from JMC Limited</h6>
        <CardNews />
        <h6 style={{ marginTop: "20px" }}>Read our case studies</h6>
        <CasesCard />
        <h6 style={{ marginTop: "20px" }}>Featured Blog</h6>
        <BlogCard />
      </div>
    </React.Fragment>
  );
};

export default NewsUpdateDetail;
