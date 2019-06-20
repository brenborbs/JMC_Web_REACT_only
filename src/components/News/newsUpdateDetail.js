import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
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
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="mt-4">{newsUpdate.title}</h1>
            <p className="lead">{newsUpdate.author}</p>
            <hr />
            <p>Posted on {newsUpdate.date}</p>
            <hr />
            <img
              className="img-fluid rounded"
              src={`${newsUpdate.imgOne}`}
              alt=""
            />
            <hr />
            <p className="lead">{newsUpdate.bodOne}</p>
            <p>{newsUpdate.bodTwo}</p>
            <hr />
            <img
              className="img-fluid rounded"
              src={`${newsUpdate.imgTwo}`}
              alt=""
            />
            <p>
              <em>{newsUpdate.descImgTwo}</em>
            </p>
            <hr />
            <p>{newsUpdate.bodThree}</p>
            <hr />
            <img
              className="img-fluid rounded"
              src={`${newsUpdate.imgThree}`}
              alt=""
            />
            <p>
              <em>{newsUpdate.descImgThree}</em>
            </p>
            <hr />
            <p>{newsUpdate.bodFour}</p>
            <hr />
            <img
              className="img-fluid rounded"
              src={`${newsUpdate.imgFour}`}
              alt=""
            />
            <p>
              <em>{newsUpdate.descImgFour}</em>
            </p>
            <hr />
            <div className="media mb-4">
              <div className="media-body">
                <h4>Share this story</h4>
                <div className="Demo__container">
                  <div className="Demo__some-network">
                    <FacebookShareButton
                      url={`https://jmc-limited.com/news/update/${
                        newsUpdate.id
                      }`}
                      quote={newsUpdate.title}
                      className="Demo__some-network__share-button"
                    >
                      <FacebookIcon size={32} round={false} />
                    </FacebookShareButton>
                    <FacebookShareCount
                      url={`https://jmc-limited.com/news/update/${
                        newsUpdate.id
                      }`}
                      className="Demo__some-network__share-count"
                    >
                      {count => count}
                    </FacebookShareCount>
                  </div>
                  <div className="Demo__some-network">
                    <TwitterShareButton
                      url={`https://jmc-limited.com/news/update/${
                        newsUpdate.id
                      }`}
                      quote={newsUpdate.title}
                      className="Demo__some-network__share-button"
                    >
                      <TwitterIcon size={32} round={false} />
                    </TwitterShareButton>
                  </div>
                  <div className="Demo__some-network">
                    <LinkedinShareButton
                      url={`https://jmc-limited.com/news/update/${
                        newsUpdate.id
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
                      url={`https://jmc-limited.com/news/update/${
                        newsUpdate.id
                      }`}
                      subject={newsUpdate.title}
                      body="body"
                      className="Demo__some-network__share-button"
                    >
                      <EmailIcon size={32} round={false} />
                    </EmailShareButton>
                  </div>
                  <div className="Demo__some-network">
                    <WhatsappShareButton
                      url={`https://jmc-limited.com/news/update/${
                        newsUpdate.id
                      }`}
                      title={newsUpdate.title}
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

            <h6 style={{ marginTop: "20px" }}>Read our case studies</h6>
            <CasesCard />
            <h6 style={{ marginTop: "20px" }}>Featured Blog</h6>
            <BlogCard />
          </div>
          {/* Column one ends here */}
          {/* Sidebar widgets column */}
          <div className="col-md-4">
            <div className="card my-4">
              <h6 className="card-header">More Featured News </h6>
              <div className="card-body">
                <CardNews />
              </div>
            </div>
            <div className="card my-4">
              <h5 className="card-header">Categories</h5>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <Link to="/blog/2">Surface Treatment</Link>
                      </li>
                      <li>
                        <Link to="/blog/3">New Buildings</Link>
                      </li>
                      <li>
                        <Link to="/blog/4">On-Board Maintenance</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <Link to="/blog/6">Tank Surveys</Link>
                      </li>
                      {/* <li>
                        <Link to="/">JS</Link>
                      </li>
                      <li>
                        <Link to="/">JS</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Categories end here */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewsUpdateDetail;
