import React, { Component } from 'react';
import MemberList from './memberList';

import Diag from '../../Resources/img/jmc_diag.png';
import Bren from '../../Resources/img/brennon.JPG';
import Mart from '../../Resources/img/martin.png';
import Olek from '../../Resources/img/olekA.png';
// import Erik from '../../Resources/img/image_not_availble.png';

class Team extends Component {

  state = {
    members : [
      {
        id: 0,
        img: Bren ,
        name: "Brennon Borbon",
        dept: "Head, New Buildings",
        email: "bbo@jmc-limited.com",
        area: [
          "Yard review and selection","New Building Supervision", "Delivery Negotiations", "Claims Handling"
        ]
      },
      {
        id: 1,
        img: Olek,
        name: "Oleksandr Gutchak",
        dept: "Head, OBM Department",
        email: "tech@jmc-limited.com",
        area: [
          "On-board Repairs","Exposed Deck Repairs", "Deck Maintenance", "Ship Riding Team"
        ]
      },
      {
        id: 2,
        img: Mart,
        name: "Martin Jennet",
        dept: "Head, Dry Dockings",
        email: "mje@jmc-limited.com",
        area: [
          "Pre-Drydocking Surveys","Dry Docking Supervision", "On-Board tutoring", "Support"
        ]
      },
    ]
  }

  render() {
    const { members } = this.state;
    return (
      <section className="team">
        <div className="title-team">
        <h1 className="title-text" style={{ color: 'white' }} >Our Team</h1>
        <div className="title-underline"></div>
      </div>
        <div className="jmc_diag" >
          <img src={Diag} alt="dia"/>
        </div> 
        <MemberList 
        members={members}
        />
      </section>
    )
  }
}

export default Team;


