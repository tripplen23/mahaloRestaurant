import React, { useState } from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { chefVid } from '../../constants'
import './Intro.css'

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false)
  const vidRef = React.useRef()

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if(playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <div className='app__video'>
      <video 
        src={chefVid}
        ref={vidRef}
        type = 'video/mp4'
        loop
        control={false}
      />

      <div className="app__video-overlay flex__center">
        <div
        className="app__video-overlay_circle flex__center"
        onClick={handleVideo}
        >
          {/* If play video is true, using the ternary operator then render a button else render BsFillPlayFill */}
          {playVideo 
            ? <BsPauseFill color="#fff" fontSize={30} />
            : <BsFillPlayFill color="#fff" fontSize={30} />
          }
        </div>
      </div>
    </div>
  )
};

export default Intro;
