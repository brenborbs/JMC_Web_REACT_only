import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

const featuredDetail = ( {feature} ) => {
  return (
    <React.Fragment>
      <Helmet> 
        <title>JMC Limited/Blog</title>
        <meta 
        name={feature.title} 
        content={feature.desc} />
      </Helmet> 
      <div className="row featurette" style={{ margin: '0 auto' , width: '93%' }} >
        <div className="col-md-7 order-md-2">
          <Link to={`/blog/feature/${feature.id}`} style={{ color: 'black' }} ><h2 className="featurette-heading">{feature.title}</h2></Link>
          <p className="lead">{feature.desc}</p>
        </div>
        <div className="col-md-5 order-md-1">
          <img className="featurette-image img-fluid mx-auto" src={feature.img} alt="titan" style={{ height: '90%' }} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default featuredDetail;