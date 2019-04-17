import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeaturedList from './featuredList';

const mapState = (state) => ({
  features: state.features
})
 
 class Featured extends Component {
  render() {

    const {features} = this.props;

    return (
      <React.Fragment>
    <div className="exp-section_style-feature">

    <div className="title-case-feature" >
        <h1>Featured</h1>
        </div>
        <FeaturedList features={features} />
    </div>
    </React.Fragment>
    )
  }
}

export default connect(mapState) (Featured) ;
