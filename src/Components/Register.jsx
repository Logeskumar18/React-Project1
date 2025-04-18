import React from 'react'
import { Button1 } from './Button1';
import { useNavigate } from 'react-router-dom';
import Button2 from './Button2';
import img1 from "/src/assets/Background.png";

export const Register = () => {
    const navigate = useNavigate();

    const goSignin = () =>{
        navigate('/Signin')
    }

    return (
        <div className="container  d-flex justify-content-center" style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className=" p-5 rounded-4 shadow-lg" style={{ width: '400px' }}>
                <h3 className="text-center animateHeading my-4 fs-2">Create an account</h3>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label" style={{ color: '#7b8bab' }}>Name</label>
                    <input type="text" className="form-control" style={{ backgroundColor: "#0c1725" }} id="name" placeholder="Enter your Name" />
                </div>

                <div className="mb-3">
                    <label htmlFor="Companyname" className="form-label" style={{ color: '#7b8bab' }}>Company Name</label>
                    <input type="text" className="form-control" style={{ backgroundColor: "#0c1725" }} id="Companyname" placeholder="Enter your Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="e-mail" className="form-label" style={{ color: '#7b8bab' }}>Work Email</label>
                    <input type="email" className="form-control" style={{ backgroundColor: "#0c1725" }} id="e-mail" placeholder="Enter your Work email" />
                </div>
                <div className="mb-3">
                    <div className="d-flex justify-content-between">
                        <label htmlFor="password" className="form-label" style={{ color: '#7b8bab' }}>Password</label>

                    </div>
                    <input type="password" style={{ backgroundColor: "#0c1725" }} className="form-control" id="password" placeholder="Enter your password" />
                </div>

                <div className="">
                    <Button1 name="Register" />
                </div>

                <div className="d-flex align-items-center my-4">
                    <hr className="flex-grow-1" />
                    <span className="mx-2 text-muted">or</span>
                    <hr className="flex-grow-1" />
                </div>

                <div className="">
                    <Button2 name="Sign In with Google" />
                </div>

                <div className='d-flex mt-4 ms-3 '> 
                        <p>Already have an account?</p> <span onClick={goSignin}>Sign In</span>
                    </div>

            </div>

        </div>
    )
}
