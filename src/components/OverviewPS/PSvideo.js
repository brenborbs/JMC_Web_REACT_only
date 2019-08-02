import React, { Component } from "react";
import ReactPlayer from "react-player";

class Video extends Component {
  state = {
    loaded: false
  };

  successState = () => {
    this.setState({
      loaded: true
    });
  };

  render() {
    return (
      <div className="player-wrapper" style={{ marginTop: "3em" }}>
        {this.state.loaded === false ? (
          <p className="loader-textPS">Please wait while video is loading...</p>
        ) : null}
        <ReactPlayer
          onReady={this.successState}
          className="react-player"
          url="https://www.youtube.com/watch?v=qsTP1aMnlfM"
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}

export default Video;
