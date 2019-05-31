import React from 'react';
import News from './entryNews';

const MainNews = () => {
  return (
    <div className="entry-content" >
      <div className="feature-image-content" 
      style={{ 
        marginTop: '6em',
      }}  
    >
		      <h1 className="page-title">News</h1>
      </div>
      <News />
    </div>
  );
};

export default MainNews;
