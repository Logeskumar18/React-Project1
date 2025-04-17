import React from 'react'
import '../index.css';
import Button2 from './Button2';
import { Button1 } from './Button1';

export const Signin = () => {
    return (
        <>
            <div className="container my-5">
                <h3 className='text-center animateHeading fs-2'>Welcome Back</h3>
                <div>
                    <div className='mt-3'><label htmlFor="e-mail">Email
                    </label>
                        <input type="email" className='form-control w-25' name="e-mail" /></div>
                    <div className='mt-3'><label htmlFor="password">password</label> <a>Forgot?</a>
                        <input type='password' className='form-control w-25' name='password' /></div>
                    <div className="mt-3"><Button2 name="Sign in" /></div>
                    <div class="d-flex align-items-center my-4">
                        <hr class="flex-grow-1" />
                            <span class="mx-2 text-muted">or</span>
                            <hr class="flex-grow-1"/>
                            </div>
                            <div>
                                <Button1 name="Sign in with Google" />
                            </div>
                    </div>
                </div>
            </>
            )
}
