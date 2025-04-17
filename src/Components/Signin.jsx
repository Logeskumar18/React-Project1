import React from 'react';
import '../index.css';
import Button2 from './Button2';
import img1 from 'H:/React/project1/src/assets/Background.png';
import { Button1 } from './Button1';

export const Signin = () => {
    return (
        <>
            <div className="container  d-flex justify-content-center" style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className=" p-5 rounded-4 shadow-lg" style={{ width: '400px' }}>
                    <h3 className="text-center animateHeading my-4 fs-2">Welcome Back</h3>


                    <div className="mb-3">
                        <label htmlFor="e-mail" className="form-label" style={{color: '#7b8bab'}}>Email</label>
                        <input type="email" className="form-control" style={{ backgroundColor: "#0c1725" }} id="e-mail" placeholder="Enter your email" />
                    </div>

                    {/* Password Field */}
                    <div className="mb-3">
                        <div className="d-flex justify-content-between">
                            <label htmlFor="password" className="form-label" style={{color: '#7b8bab'}}>Password</label>
                            <a href="#" className="text-decoration-none small text-muted">Forgot?</a>
                        </div>
                        <input type="password" style={{ backgroundColor: "#0c1725" }} className="form-control" id="password" placeholder="Enter your password" />
                    </div>

                    {/* Sign In Button */}
                    <div className="mt-4 d-flex justify-content-center ">
                        <Button2  name="Sign In" />
                    </div>

                    {/* Divider */}
                    <div className="d-flex align-items-center my-4">
                        <hr className="flex-grow-1" />
                        <span className="mx-2 text-muted">or</span>
                        <hr className="flex-grow-1" />
                    </div>

                    {/* Google Sign In Button */}
                    <div className="">
                        <Button1 name="Sign In with Google" />
                    </div>
                    <div className='d-flex mt-4 ms-3 '> 
                        <p>Don't you have an account?</p><span href="">Sign Up</span>
                    </div>
                </div>
            </div>
        </>
    );
}
