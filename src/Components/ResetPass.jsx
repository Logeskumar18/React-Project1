import React from 'react'
import { Button1 } from './Button1';
import img1 from "/src/assets/Background.png";

export const ResetPass = () => {
    return (
        <div className="container  d-flex justify-content-center" style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>

            <div className=" p-5 rounded-4 shadow-lg" style={{ width: '400px' }}>
                <h3 className="text-center animateHeading my-4 fs-2"> Reset your password</h3>

                <div className="mb-4">
                    <label htmlFor="e-mail" className="form-label" style={{ color: '#7b8bab' }}>Email</label>
                    <input type="email" className="form-control" style={{ backgroundColor: "#0c1725" }} id="e-mail" placeholder="Enter your email" />
                </div>

                <div className="">
                    <Button1 name="Reset Password" />
                </div>
            </div>
        </div>
    )
}
