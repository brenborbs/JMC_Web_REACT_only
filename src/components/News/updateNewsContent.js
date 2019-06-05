import React from 'react';
import { connect } from 'react-redux';
import Detail from './newsUpdateDetail';

const mapState = (state, ownProps) => {
  const newsUpdateId = ownProps.match.params.id;

  let newsUpdate = {};

  if (newsUpdateId && state.newsUpdate.length > 0 ) {
    newsUpdate = state.newsUpdate.filter(newsUpdate => newsUpdate.id === newsUpdateId)[0];
  }

  return {
    newsUpdate
  }
}

const UpdateNewsContent = ({ newsUpdate }) => {
  return (
    <div className="entry-content" >
      <div className="feature-image-content" 
      style={{ 
        // background: `url(${feature.img})`,
        // minHeight: '50vh', 
        marginTop: '8em',
        marginBottom: '3em',
      }}  
    >
		      <h1 className="page-title">News Update</h1>
      </div>
      <Detail newsUpdate={newsUpdate} />
    </div>
  );
};

export default connect(mapState) (UpdateNewsContent);