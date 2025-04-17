import React from 'react';
import logo from 'H:/React/project1/src/assets/logo.png';
import { Button1 } from './Button1';
import Button2 from './Button2';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/Register');
    };

    const handleSignInClick = () => {
        navigate('/Signin');
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <header
                className="input-group w-75 mx-0 rounded-5 mt-4 align-middle border border-black"
                style={{ backgroundColor: "#0c1725" }}
            >
                <div className="w-50 py-3">
                    <img src={logo} alt="Logo" className="ms-5" />
                </div>
                <div className="w-50 d-flex flex-row-reverse align-items-center">
                    <Button1 onClick={handleRegisterClick} name="Register" />
                    <Button2 onClick={handleSignInClick} name="Sign In" />
                </div>
            </header>
        </div>
    );
}
