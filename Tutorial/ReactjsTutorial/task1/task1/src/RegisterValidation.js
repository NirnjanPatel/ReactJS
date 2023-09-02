import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import validation from "./validation";

const SignUp = () => {
    const Navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    const handleSubmit = () => {

        var firstName = document.getElementById('firstName');
        var err1 = document.getElementById('err1');

        if (
            firstName &&
            lastName &&
            email &&
            password &&
            confirmPassword &&
            mobileNumber
        ) {
            localStorage.setItem("firstName", firstName);
            localStorage.setItem("lastName", lastName);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            localStorage.setItem("confirmPassword", confirmPassword);
            localStorage.setItem("mobileNumber", mobileNumber);
            alert("Registration successfull...!!!");
            Navigate("/login");
        } else {
            console.log("Error..........!!!!!!!!!!!");
        }
    };

    return (
        <div class="container needs-validation">
            <div class="container">
                <Home />
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-lg-6 col-md-6 p-3" style={{ background: "#e3dfee" }}>
                    <div class="about-text p-3">
                        <h2>Register Here!!!</h2>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div class="form-group mt-5  p-3">
                                <input
                                    type="text"
                                    placeholder="Enter first name"
                                    class="form-control"
                                    id="firstName"
                                    name="firstName"
                                    required
                                    onChange={(e) => setFirstName(e.target.value)}
                                />

                                <span id="err1"></span>
                            </div>
                            <div class="form-group p-3">
                                <input
                                    type="text"
                                    placeholder="Enter last name"
                                    class="form-control"
                                    id="lastName"
                                    name="lastName"
                                    required
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div class="form-group p-3">
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    class="form-control"
                                    id="email"
                                    name="email"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div class="form-group p-3">
                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    class="form-control"
                                    name="password"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div class="form-group p-3">
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    class="form-control"
                                    id="cPassword"
                                    name="cPassword"
                                    required
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <div class="form-group p-3 maxlength=10">
                                <input
                                    type="text"
                                    placeholder="Enter mobile number"
                                    class="form-control"
                                    id="mobile"
                                    name="mobile"
                                    required
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                />
                            </div>
                            <button type="submit" class="btn btn-primary col-lg-6">
                                Sign Up
                            </button>
                        </form>
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
