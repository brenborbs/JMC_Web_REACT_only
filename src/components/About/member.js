import React, { Component } from 'react';

class Member extends Component {  
  render() {
    const { img, name, dept, email } = this.props;
    const area = this.props.area.map((ar, index) =>(
      <p key={index} >{ar}</p>
    ))
    return (
      <article className="team-member">
      <img src={img} alt="img" />
        <h2>{name}</h2>
        <h5>{dept}</h5>
        <hr />
        {area}
        <hr />
        <p><strong><i className="fas fa-envelope"></i></strong> {email}</p>
      </article>
    )
  }
}

export default Member;
