import React from 'react';
import { connect } from 'react-redux';
import FeaturedContentDetail from './featuredContentDetail';

const mapState = (state, ownProps) => {
  const featureId = ownProps.match.params.id;

  let feature = {};

  if (featureId && state.features.length > 0 ) {
    feature = state.features.filter(feature => feature.id === featureId)[0];
  }

  return {
    feature
  }
}
 
const FeaturedContent = ({ feature }) => {
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
		      <h1 className="page-title">Featured Article</h1>
      </div>
      <FeaturedContentDetail feature={feature} />
    </div>
  );
};

export default connect(mapState) (FeaturedContent);