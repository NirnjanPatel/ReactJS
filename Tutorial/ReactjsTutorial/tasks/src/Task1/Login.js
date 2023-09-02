import { React, useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import { Navigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const loginEmail = JSON.parse(localStorage.getItem('email'));
        const loginPassword = JSON.parse(localStorage.getItem('password'));

        if (loginEmail == email && loginPassword == password) {
            
        }
        else {
            alert("Login Failed.........!!!!!!!!!");
        }
    }

    return (
        <div class="container mt-5">
            <div class="row ">
                <div class="col-md-3"></div>
                <div class="col-lg-6 col-md-6 p-3" style={{ background: "#e3dfee" }}>
                    <div class="about-text p-3">
                        <h2>Login Here!!!</h2>
                        <form>
                            <div class="form-group p-3">
                                <input
                                    type="email"
                                    placeholder='Enter email' class="form-control"
                                    id="email"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div class="form-group p-3">
                                <input
                                    type="text"
                                    placeholder='Enter password' class="form-control"
                                    name="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <i class="fa fa-eye-slash" id="show_hide_password" aria-hidden="true"></i>
                            </div>

                            <button type="submit" class="btn btn-primary col-lg-6" onClick={handleLogin}>Login</button>
                        </form>
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;