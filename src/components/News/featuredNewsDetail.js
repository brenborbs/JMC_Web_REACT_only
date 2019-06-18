import React from "react";
import Helmet from "react-helmet";
import UpdateCards from "../../UpdateCard/EntryUpdateNews";
import CasesCard from "../../CasesCard/CasesEntry";
import BlogCard from "../../BlogCard/BlogEntry";
// import { Link } from 'react-router-dom';

import { Facebook, Twitter, Linkedin, Whatsapp } from "react-social-sharing";

const FeaturedNewsDetail = ({ newsInfo }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>JMC Limited/news/feature/{newsInfo.title}</title>
        <meta name={newsInfo.bodyOne} content={newsInfo.bodyTwo} />
        <meta name={newsInfo.bodyThree} content={newsInfo.bodyFour} />
      </Helmet>
      <div className="post-detail-content">
        <div className="summary">
          <img
            className="featurette-image img-fluid mx-auto"
            src={`${newsInfo.img}`}
            alt="feat"
            style={{ width: "100%" }}
          />
        </div>

        <div className="intro">
          <h1 className="post-title">{newsInfo.title}</h1>
          <div className="news-date">
            <p>
              {newsInfo.date} | {newsInfo.author}
            </p>
          </div>
        </div>

        <div className="post-content">
          <p>{newsInfo.bodyOne}</p>
          <p>{newsInfo.bodyTwo}</p>
          <p>{newsInfo.bodyThree}</p>

          <p style={{ marginTop: "18px" }}>
            <em>{newsInfo.bodyFour}</em>
          </p>
          <p>{newsInfo.bodyFive}</p>
        </div>
        <div className="story-container">
          <h4>Share this story</h4>

          <Facebook
            solidcircle
            big
            link={`https://jmc-limited.com/news/feature/${newsInfo.id}`}
            title={`https://jmc-limited.com/news/feature/${newsInfo.title}`}
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
        <h6>News Updates from JMC Limited</h6>
        <UpdateCards />
        <h6 style={{ marginTop: "20px" }}>Read our case studies</h6>
        <CasesCard />
        <h6 style={{ marginTop: "20px" }}>Featured Blog</h6>
        <BlogCard />
      </div>
    </React.Fragment>
  );
};

export default FeaturedNewsDetail;
