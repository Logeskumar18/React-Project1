import React from 'react';
import img1 from 'H:/React/project1/src/assets/Background.png';
import { Button1 } from './Button1';
import Button2 from './Button2';

const Hinfo = () => {
    

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

   

    return (
        <>

            <style>{keyframes}</style>

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


          
        </>
    );
};

export default Hinfo;
