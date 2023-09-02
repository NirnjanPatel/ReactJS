import React from 'react';
import './Profile.css';
import Navbar from './Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const Navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");


    const sfName = localStorage.getItem("firstName");
    const slName = localStorage.getItem("lastName");
    const sEmail = localStorage.getItem("email");
    const sPass = localStorage.getItem("password");
    const sMobile = localStorage.getItem("mobileNumber");

    const eProfile = () => {
        if (firstName && lastName && email && password && mobileNumber) {
            localStorage.setItem("firstName", firstName);
            localStorage.setItem("lastName", lastName);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            localStorage.setItem("confirmPassword", confirmPassword);
            localStorage.setItem("mobileNumber", mobileNumber);
            alert("Profile successfully edited...!!!");
            Navigate("/profile");
        } else {
            console.log("Error..........!!!!!!!!!!!");
        }

    }

    return (
        <div class="container">
            <div class="container">
                <Navbar />
            </div>
            <div class="row ">
                <div class="col-md-3"></div>
                <div class="col-lg-6 col-md-6 p-3" style={{ background: "#e3dfee" }}>
                    <div class="about-text p-3">
                        <h2>Edit Profile Here!!!</h2>
                        <form>
                            <div class="form-group mt-5  p-3">
                                <input
                                    type="text"
                                    placeholder={sfName} class="form-control" id="firstName" name="firstName"
                                    onChange={(e) => setFirstName(e.target.value)}
                                />

                            </div>
                            <div class="form-group p-3">
                                <input
                                    type="text"
                                    placeholder={slName} class="form-control"
                                    id="lastName"
                                    name="lastName"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div class="form-group p-3">
                                <input
                                    type="email"
                                    placeholder={sEmail} class="form-control"
                                    id="email"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div class="form-group p-3">
                                <input
                                    type="password"
                                    placeholder={sPass} class="form-control"
                                    name="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div class="form-group p-3 maxlength=10">
                                <input
                                    type="text"
                                    placeholder={sMobile} class="form-control"
                                    id="mobile"
                                    name="mobile"
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                />
                            </div>
                            <button class="btn btn-primary col-lg-6" onClick={eProfile}>Save changes</button>
                        </form>
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>
        </div>
    );
};
export default EditProfile;