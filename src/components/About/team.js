import React, { Component } from "react";
import MemberList from "./memberList";

import Bren from "../../Resources/img/brennon.JPG";
import Pier from "../../Resources/img/pier.png";
import Mart from "../../Resources/img/martin.png";
import Olek from "../../Resources/img/olekA.png";
import Erol from "../../Resources/img/erol.png";
import Georgi from "../../Resources/img/george.png";
import Anders from "../../Resources/img/anders.png";
import Marian from "../../Resources/img/marian.png";
import Yeon from "../../Resources/img/yeon.png";
import Lejun from "../../Resources/img/lejunkim.png";
import Kris from "../../Resources/img/kristian.png";

class Team extends Component {
  state = {
    members: [
      {
        id: 0,
        img: Mart,
        name: "Martin Jennet",
        dept: "Head, Sales and Dry-docking",
        email: "mje@jmc-limited.com",
        area: [
          "Client Care",
          "New Concepts Development",
          "Technical Support",
          "Pre-docking Surveys"
        ]
      },
      {
        id: 1,
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
        id: 2,
        img: Anders,
        name: "Anders Bouet Thomsen",
        dept: "New-building Project Manager",
        email: "abt@jmc-limited.com",
        area: [
          "Overall Project Management",
          "Site Team Management",
          "Senior Observer",
          "New-building Drawing Approval"
        ]
      },
      {
        id: 3,
        img: Georgi,
        name: "Georgi Georgiev",
        dept: "Coating Integrity Supervisor",
        email: "geo@jmc-limited.com",
        area: [
          "Paint Supervision",
          "Paint Specification Review",
          "Paint Process Optimization",
          "Technical Paint Support"
        ]
      },
      {
        id: 4,
        img: Erol,
        name: "Erol Caglar",
        dept: "Coating Integrity Supervisor",
        email: "eca@jmc-limited.com",
        area: [
          "Paint Supervision",
          "Paint Specification Review",
          "Paint Process Optimization",
          "Technical Paint Support"
        ]
      },

      {
        id: 5,
        img: Marian,
        name: "Marian Grigore",
        dept: "Coating Integrity Supervisor",
        email: "mag@jmc-limited.com",
        area: [
          "Paint Supervision",
          "Paint Specification Review",
          "Paint Process Optimization",
          "Technical Paint Support"
        ]
      },
      {
        id: 6,
        img: Bren,
        name: "Brennon Borbon",
        dept: "Coating Integrity Supervisor",
        email: "bbo@jmc-limited.com",
        area: [
          "Paint Supervision",
          "Paint Specification Review",
          "Paint Process Optimization",
          "Technical Paint Support"
        ]
      },
      {
        id: 7,
        img: Pier,
        name: "Per Gabrielsson",
        dept: "Coating Integrity Supervisor",
        email: "peg@jmc-limited.com",
        area: [
          "Paint Supervision",
          "Paint Specification Review",
          "Paint Process Optimization",
          "Technical Paint Support"
        ]
      },
      {
        id: 8,
        img: Lejun,
        name: "Ie Jun Kim",
        dept: "Coating Integrity Supervisor",
        email: "ijk@jmc-limited.com",
        area: [
          "Paint Supervision",
          "Paint Specification Review",
          "Paint Process Optimization",
          "Technical Paint Support"
        ]
      },
      {
        id: 9,
        img: Yeon,
        name: "Yeon Hong Chung",
        dept: "Coating Integrity Supervisor",
        email: "yhc@jmc-limited.com",
        area: [
          "Paint Supervision",
          "Paint Specification Review",
          "Paint Process Optimization",
          "Technical Paint Support"
        ]
      },
      {
        id: 10,
        img: Kris,
        name: "Kristian S. Bach",
        dept: "Coating Integrity Supervisor",
        email: "ksb@jmc-limited.com",
        area: [
          "Paint Supervision",
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
