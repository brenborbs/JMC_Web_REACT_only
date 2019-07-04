import React, { Component } from "react";
import ReactPlayer from "react-player";

class VideoJetWash extends Component {
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
          <p className="media-loader">Please wait while video is loading...</p>
        ) : null}
        <ReactPlayer
          onReady={this.successState}
          className="react-player"
          url="https://youtu.be/P3B6h1eu25s"
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}

export default VideoJetWash;
