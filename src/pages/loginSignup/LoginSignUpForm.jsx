import React from 'react'
import './LoginSignUpForm.css'

const LoginSignUpForm = () => {
    return (
        <div className='login-signup-form'>
            <form className='form'>
                <div className='logo'>
                    <h1>S N K R S</h1>
                </div>

                <div className='login-sign-up'>
                    <p>Enter your email for sign up or sign in </p>
                    <input type='email'  placeholder='Email' />
                </div>
                <div className="term-conditions">
                    <p>By continuing , i agree to the terms of use & and privacy policy</p>
                </div>
                <div className='submit'>
                    <button type='submit'>Continue</button>
                </div>
            </form>

        </div>
    )
}

export default LoginSignUpForm