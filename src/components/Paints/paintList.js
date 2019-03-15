import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 class PaintList extends Component {
  render() {
    const {paint} = this.props;
    return (     
      <article className="paint-project-item" >
              <div className="paint-img-container" >
                  <img  
                  style={{width: '100%'}}
                  src={paint.photo} alt="brush"/>
              </div>
              <div className="paint-text-container">
                <h4>{paint.title}</h4>
                <p>{paint.summary}</p>
                <Link 
              className="btn btn-outline-danger"
              to={`/blog/${paint.id}`} >Read More...
              </Link>
              </div>
      </article>
    )
  }
}

export default PaintList;