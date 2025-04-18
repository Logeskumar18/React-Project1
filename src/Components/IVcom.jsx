import React, { useState } from 'react';
import heroImg from '/src/assets/hero-image-01.png';
import Video from '/src/assets/video.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';


export const IVComp = () => {
    const [showVideo, setShowVideo] = useState(false);
  
    const handleImageClick = () => {
      setShowVideo(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  
  return (
    <>
    
     
      {showVideo && (
    <div
      className="position-fixed top-0 start-0 w-100 h-100  z-3 d-flex justify-content-center align-items-center"
      onClick={() => setShowVideo(false)} 
    >
      <div
        className="w-100 m-5 p-5"
        onClick={(e) => e.stopPropagation()} 
      >
        <video controls autoPlay className="w-100 rounded-4">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )}
  
  
      <div className="d-flex justify-content-center position-relative opacity-50 ">
        <img
          src={heroImg}
          alt="Hero"
          className="img-fluid w-75 rounded-5"
          style={{ cursor: 'pointer' }}
          
        />
        <div className='position-absolute top-50 start-50 translate-middle text-white bg-black p-3 rounded-4' onClick={handleImageClick}>
          <h5 style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faCirclePlay} size="1x" className="me-2" style={{ color: '#5361dc' }} />
            Watch Demo
          </h5>
        </div>
      </div>
    </>
  )
  }
  