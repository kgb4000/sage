import React from 'react'

const BackgroundVideo = () => {
  return (
    <video autoPlay="autoplay" loop="loop" muted >
      <source src='video/white-video.mp4' type="video/mp4" />
    </video>
  )
}

export default BackgroundVideo