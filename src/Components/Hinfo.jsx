import React, { useState } from 'react';
import img1 from 'H:/React/project1/src/assets/Background.png';
import heroImg from 'H:/React/project1/src/assets/hero-image-01.png';
import Video from 'H:/React/project1/src/assets/video.mp4';
import { Button1 } from './Button1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import Button2 from './Button2';

const Hinfo = () => {
    const [showVideo, setShowVideo] = useState(false);

    const headerStyle = {
        animation: "colorChange 4s infinite",
        fontSize: '45px',
    };

    const keyframes = `
    @keyframes colorChange {
      0%   { color: #d7dded; }
      50%  { color: #d0ddfd; }
      100% { color: #a6bcff; }
    }
  `;

    const handleImageClick = () => {
        setShowVideo(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>

            <style>{keyframes}</style>


            {showVideo && (
                <div className="position-fixed top-0 start-0 w-100  p-4 z-3" style={{ height: 'auto' }}>
                    <video controls autoPlay className="w-100 rounded-4">
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}


            <main
                className="d-flex justify-content-center text-center pb-5"
                style={{
                    backgroundImage: `url(${img1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="w-75 font-bolder">
                    <h1 style={headerStyle} className="pt-5">
                        AI-driven tools for product teams
                    </h1>
                    <h5 style={{ color: '#707ba4' }}>
                        Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
                    </h5>
                    <div className="mt-5">
                        <Button1 name="Start Building" />
                        <Button2 name="Schedule Demo" />
                    </div>
                </div>
            </main>


            <div className="d-flex justify-content-center position-relative">
                <img
                    src={heroImg}
                    alt="Hero"
                    className="img-fluid w-75 rounded-5"
                    style={{ cursor: 'pointer' }}
                    onClick={handleImageClick}
                />
                <div className='position-absolute top-50 start-50 translate-middle text-white '>
                    <h5 style={{ cursor: 'pointer' }}>
                        <FontAwesomeIcon icon={faCirclePlay} size="1x" className="me-2" style={{color: '#5361dc'}}/>
                        Watch Demo
                    </h5>
                </div>

            </div>
        </>
    );
};

export default Hinfo;
