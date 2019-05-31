import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedNews = ({ newInfo }) => {
  return (
      <article className="news-feature-item" >
              <div className="news-img-container" >
                  <img  
                  style={{width: '100%'}}
                  src={newInfo.img} alt="brush"/>
              </div>
              <div className="news-text-container">
                <h4>{newInfo.title}</h4>
                <p>{newInfo.parOne}</p>
                <Link 
              className="news-link"
              to={`/news/feature/${newInfo.id}`} >Read More >
              </Link>
              </div>
      </article>
  
  );
};

export default FeaturedNews;
