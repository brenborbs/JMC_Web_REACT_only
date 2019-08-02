import React, { Component } from "react";
import MemberList from "./memberList";

import Bren from "../../Resources/img/brennon.JPG";
import Mart from "../../Resources/img/martin.png";
import Olek from "../../Resources/img/olekA.png";
import Erol from "../../Resources/img/erol.png";
 
class Team extends Component {
  state = {
    members: [
      {
        id: 0,
        img: Mart,
        name: "Martin Jennet",
        dept: "Head, Dry Dockings",
        email: "mje@jmc-limited.com",
        area: [
          "Pre-Drydocking Surveys",
          "Dry Docking Supervision",
          "On-Board tutoring",
          "Support"
        ]
      },
      {
        id: 1,
        img: Bren,
        name: "Brennon Borbon",
        dept: "Head, New Buildings",
        email: "bbo@jmc-limited.com",
        area: [
          "Yard review and selection",
          "New Building Supervision",
          "Delivery Negotiations",
          "Claims Handling"
        ]
      },
      {
        id: 2,
        img: Olek,
        name: "Oleksandr Gutchak",
        dept: "Head, OBM Department",
        email: "tech@jmc-limited.com",
        area: [
          "On-board Repairs",
          "Exposed Deck Repairs",
          "Deck Maintenance",
          "Ship Riding Team"
        ]
      },
      {
        id: 3,
        img: Mart,
        name: "Martin Jennet",
        dept: "Owner, Sales & Client Relations",
        email: "mje@jmc-limited.com",
        area: [
          "Company Management",
          "Client Care",
          "New Business Concepts",
          "Technical Support"
        ]
      },
      {
        id: 4,
        img: Erol,
        name: "Erol Caglar",
        dept: "Coating Integrity Supervisor, New buildings",
        email: "eca@jmc-limited.com",
        area: [
          "NB - Paint Supervision",
          "Paint Specification Review",
          "Paint Process Optimization",
          "Technical Paint Support"
        ]
      }
    ]
  };

  render() {
    const { members } = this.state;
    return (
      <section className="team">
        <div className="title-team">
          <h1 className="title-text" style={{ color: "white" }}>
            Our Team
          </h1>
          <div className="title-underline" />
        </div>
        <MemberList members={members} />
      </section>
    );
  }
}

export default Team;
