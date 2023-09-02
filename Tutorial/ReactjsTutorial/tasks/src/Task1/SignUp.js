import { React, useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    const handleSubmit = (e) => {
        e.previousDefault()
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
        setPassword(password);
        setConfirmPassword(confirmPassword);
        setMobileNumber(mobileNumber);

        if (firstName && lastName && email && password && confirmPassword && mobileNumber) {
            localStorage.setItem('firstName', JSON.stringify(firstName));
            localStorage.setItem('lastName', JSON.stringify(lastName));
            localStorage.setItem('email', JSON.stringify(email));
            localStorage.setItem('password', JSON.stringify(password));
            localStorage.setItem('confirmPassword', JSON.stringify(confirmPassword));
            localStorage.setItem('mobileNumber', JSON.stringify(mobileNumber));
        } else {
            console.log("hello")
        }

        setTimeout(() => {
            navigate("/login");
        }, 3000);

    };

    return (
        <div class="container mt-5">
            <div class="row ">
                <div class="col-md-3"></div>
                <div class="col-lg-6 col-md-6 p-3" style={{ background: "#e3dfee" }}>
                    <div class="about-text p-3">
                        <h2>Register Here!!!</h2>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div class="form-group mt-5  p-3">
                                <input
                                    type="text"
                                    placeholder='Enter first name' class="form-control" id="firstName" name="firstName"
                                    onChange={(e) => setFirstName(e.target.value)}
                                />

                            </div>
                            <div class="form-group p-3">
                                <input
                                    type="text"
                                    placeholder='Enter last name' class="form-control"
                                    id="lastName"
                                    name="lastName"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
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
                            <div class="form-group p-3">
                                <input
                                    type="password"
                                    placeholder='Confirm password' class="form-control"
                                    id="cPassword"
                                    name="cPassword"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <div class="form-group p-3 maxlength=10">
                                <input
                                    type="text"
                                    placeholder='Enter mobile number' class="form-control"
                                    id="mobile"
                                    name="mobile"
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                />
                            </div>
                            <button type="submit" class="btn btn-primary col-lg-6">Sign Up</button>
                        </form>
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;