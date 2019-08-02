import React, { Component } from "react";
import Member from "./member";

class MemberList extends Component {
  render() {
    const members = this.props.members.map((r, index) => (
      <Member key={r.id} {...r} />
    ));
    return <div className="team-center">{members}</div>;
  }
}

export default MemberList;
