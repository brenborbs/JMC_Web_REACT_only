import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

const FeaturedNews = ({ newInfo }) => {
  return (
      <article className="news-feature-item" >
      <Helmet>
        <title>JMC Limited/News</title>
        <meta name={newInfo.title} content={newInfo.bodyOne} />
      
      </Helmet> 
              <div className="news-img-container" >
                  <img  
                  style={{width: '100%'}}
                  src={newInfo.img} alt={newInfo.title}/>
              </div>
              <div className="news-text-container">
                <h4>{newInfo.title}</h4>
                <p><em>{newInfo.date}</em></p>
                <Link 
              className="news-link"
              to={`/news/feature/${newInfo.id}`} >Read More >
              </Link>
              </div>
      </article>
  
  );
};

export default FeaturedNews;
