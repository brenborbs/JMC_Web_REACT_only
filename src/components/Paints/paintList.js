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
              // style={{ margin: '10px 10px 20px 10px' }}
              // className="btn btn-primary btn-lg"
              to={`/blog/${paint.id}`} >View
              </Link>
              </div>
            </article>
          
    )
  }
}

export default PaintList;