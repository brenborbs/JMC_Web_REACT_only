import React, {Component} from 'react';
import ReactPlayer from 'react-player';


class Video extends Component {

  state = {
    loaded : false
  }

  successState = () => {
    this.setState({
      loaded : true
    })
  }

  render() {
    return (
      <div className='video-wrapper'>
        {this.state.loaded === false 
        ? <p className="loading-text" >Please wait while video is loading...</p>
        : null
        }
        <ReactPlayer
        onReady={this.successState}
        className='react-player'
        url='https://youtu.be/lLpBzG74P8k'
        width='100%'
        height= '100%'
      />
      </div>
    )
  }
}

export default Video


