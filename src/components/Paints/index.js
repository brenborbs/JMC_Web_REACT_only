import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaintDetail from './paintDetail';

const mapState = (state) => ({
  paints: state.paints
})

 class Paint extends Component {
  render() {

    const {paints} = this.props;

    return (
    <section className="paint-projects" id="projects-p" >
      
      <div className="title" style={{paddingTop: '20px'}} >
        <div className="paint-title-text" >
          <h1>Types of Paints</h1>
          <div className="title-underline"></div>
        </div>
  
        <div className="paint-project-container" >
        <PaintDetail paints={paints} />
        </div>
      
      </div>
    </section>
    )
  }
}

export default connect(mapState) (Paint);