import React, { Component } from 'react';
import NewsLink from './featuredNews';

 class NewsMap extends Component {
  render() {
    const { newsInfo } = this.props;
    return (
      
        <React.Fragment>
        {newsInfo.map((newInfo) => (
          <NewsLink 
          newInfo={newInfo}
          key={newInfo.id}
          />
        ))}
      </React.Fragment>
      
    )
  }
}

export default NewsMap;
