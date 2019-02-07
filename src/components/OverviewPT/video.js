import React from 'react';
import ReactPlayer from 'react-player';


const Video = () => {

    return (
        <div className='video-wrapper' >
        <ReactPlayer
          className='react-player'
          url='https://youtu.be/56mFLAFfrjE'
          width='100%'
          height= '100%'
        />
      </div>
    );
};

export default Video;