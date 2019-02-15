import React, { Component } from 'react'
import {Link } from 'react-router-dom';


 class Service extends Component {
  render() {
    const { img, title, desc, url } = this.props;
    return (
      <article className="work">
        <img src={img} className="img-box" alt="seq" />
        <div className="image-overlay">
          <div className="image-text">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
          <div className="image-icon">
            <Link to={url}><i className="fa fa-arrow-right" ></i></Link>
          </div>
        </div>
      </article>
    )
  }
}

export default Service;
