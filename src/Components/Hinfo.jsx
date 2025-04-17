import React from 'react';
import img1 from 'H:/React/project1/src/assets/Background.png';
import { Button1 } from './Button1';
import Button2 from './Button2';
import '../index.css';


const Hinfo = () => {
    

    

   

    return (
        <>

            <main
                className="d-flex justify-content-center text-center pb-5"
                style={{
                    backgroundImage: `url(${img1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="w-75 font-bolder">
                    <h1  className="animateHeading pt-5">
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
