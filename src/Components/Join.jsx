import React from 'react';
import Button2 from "./Button2";
import { Button1 } from "./Button1";
import img1 from "/src/assets/Background.png";

export const Join = () => {
    return (
        <div
            className='text-center d-flex justify-content-center align-items-center'
            style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '50vh',
            }}
        >
            <div className="container">
                <h1 className="display-5 fw-bold text-white">Join the content-first platform</h1>

                <div className="mt-4 d-flex flex-column flex-sm-row justify-content-center gap-3">
                    <Button1 name="Start Building" />
                    <Button2 name="Schedule Demo" />
                </div>
            </div>
        </div>
    );
};
