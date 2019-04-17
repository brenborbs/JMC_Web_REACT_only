import React  from 'react';
import { connect } from 'react-redux';
import PaintContentDetail from './paintContentDetail';

 
const mapState = (state, ownProps) => {
  const paintId = ownProps.match.params.id;

  let paint = {};

  if (paintId && state.paints.length > 0 ) {
    paint = state.paints.filter(paint => paint.id === paintId)[0];
  }

  return {
    paint
  }
}
 

 const PaintContent = ({ paint }) => {
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
       <h1 className="page-title">Case Studies: {paint.category}</h1>
      </div>
      <PaintContentDetail 
          paint={paint} />
      
     </div>
   );
 };
 
 export default connect(mapState) (PaintContent);