import React, { Component } from "react";
import CardLink from "./CardLink";

class CardMap extends Component {
  render() {
    const { newsInfo } = this.props;
    return (
      <React.Fragment>
        {newsInfo.map(newInfo => (
          <CardLink newInfo={newInfo} key={newInfo.id} />
        ))}
      </React.Fragment>
    );
  }
}

export default CardMap;
