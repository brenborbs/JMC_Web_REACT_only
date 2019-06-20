import React from "react";
import Helmet from "react-helmet";
import UpdateCards from "../../UpdateCard/EntryUpdateNews";
import CasesCard from "../../CasesCard/CasesEntry";
import BlogCard from "../../BlogCard/BlogEntry";
import { Link } from "react-router-dom";

import { Facebook, Twitter, Linkedin, Whatsapp } from "react-social-sharing";

const FeaturedNewsDetail = ({ newsInfo }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>JMC Limited/news/feature/{newsInfo.title}</title>
        <meta name={newsInfo.bodyOne} content={newsInfo.bodyTwo} />
        <meta name={newsInfo.bodyThree} content={newsInfo.bodyFour} />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="mt-4">{newsInfo.title}</h1>
            <p className="lead">{newsInfo.author}</p>
            <hr />
            <p>Posted on {newsInfo.date}</p>
            <hr />
            <img className="img-fluid rounded" src={`${newsInfo.img}`} alt="" />
            <hr />
            <p className="lead">{newsInfo.bodyOne}</p>
            <p>{newsInfo.bodyTwo}</p>
            <p>{newsInfo.bodyThree}</p>
            <p>{newsInfo.bodyFour}</p>
            <p>{newsInfo.bodyFive}</p>
            <div className="media mb-4">
              <div className="media-body">
                <div className="story-container">
                  <h4>Share this story</h4>
                  <Facebook
                    solidcircle
                    big
                    link={`https://jmc-limited.com/news/feature/${newsInfo.id}`}
                    title={`https://jmc-limited.com/news/feature/${
                      newsInfo.title
                    }`}
                  />
                  <Twitter
                    solid
                    big
                    message="Share this article"
                    link={`https://jmc-limited.com/news/feature/${newsInfo.id}`}
                  />
                  <Linkedin
                    solidcircle
                    big
                    message="Share this article"
                    link={`https://jmc-limited.com/news/feature/${newsInfo.id}`}
                  />
                  <Whatsapp
                    solid
                    big
                    message="Share on Whatsapp"
                    link={`https://jmc-limited.com/news/feature/${newsInfo.id}`}
                  />
                </div>

                <h6>Featured Blog</h6>
                <BlogCard />
                <h6 style={{ marginTop: "20px" }}>Read our case studies</h6>
                <CasesCard />
              </div>
            </div>
          </div>
          {/* Column one ends here */}
          {/* Sidebar widgets column */}
          <div className="col-md-4">
            <div className="card my-4">
              <h6 className="card-header">Latest Update</h6>
              <div className="card-body">
                <UpdateCards />
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

export default FeaturedNewsDetail;
