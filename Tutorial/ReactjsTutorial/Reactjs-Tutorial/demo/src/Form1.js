import React, { Component, useEffect, useRef, useState } from 'react'
import LoginPage from './pages/LoginPage';
import './style.css';
    
const SignUp = () => {
    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const mobile = useRef();

    const [showLogin, setShowLogin] = useState(false);
    const localSignUp = localStorage.getItem("signUp");

    useEffect(() => {
        setShowLogin(true);
    });



    const handleClick = () => {
        if (firstName.current.value && lastName.current.value && email.current.value && password.current.value && confirmPassword.current.value && mobile.current.value) {
            localStorage.setItem("firstName", firstName.current.value);
            localStorage.setItem("lastName", lastName.current.value);
            localStorage.setItem("email", email.current.value);
            localStorage.setItem("password", password.current.value);
            localStorage.setItem("confirmPassword", confirmPassword.current.value);
            localStorage.setItem("mobile", mobile.current.value);
            alert("Account Created Successfully.......!!!!!! ")
        }
    }

    return (

        <div className='container'>
            {/* {showLogin ? <LoginPage /> : */}
                <form>
                    <h1> Sign Up</h1>
                    <div className="mb-3" id='firstName'>
                        <input
                            type="text"
                            ref={firstName}
                            className="form-control"
                            placeholder="First name"
                        />
                    </div>
                    <div className="mb-3" id='lastName'>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            ref={lastName}
                        />
                    </div>
                    <div className="mb-3" id='email'>
                
                        <input
                            type="email"
                            ref={email}
                            className="form-control"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="mb-3" id='password'>
                        <input
                            type="password"
                            ref={password}
                            className="form-control"
                            placeholder="Enter password"
                        />
                    </div>

                    <div className="mb-3" id='confirmPassword'>
                        <input
                            type="password"
                            ref={confirmPassword}
                            className="form-control"
                            placeholder="Confirm password"
                        />
                    </div>

                    <div className="mb-3" id='mobile'>
                        <input
                            type="text"
                            ref={mobile}
                            className="form-control"
                            placeholder="Enter mobile"
                        />
                    </div>
                
                    <div className="d-grid">
                        <button className="btn btn-primary" onClick={handleClick} >
                            Sign Up
                        </button>
                    </div>
                    <p className="forgot-password text-right">
                        Already registered <a href="/sign-in">sign in?</a>
                    </p>
                </form>
            
        </div>
    );
};
export default SignUp;