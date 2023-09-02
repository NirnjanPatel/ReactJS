import React from "react";
import "./Profile.css";
import Navbar from "./Navbar";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const HomePage = () => {
  const Navigate = useNavigate();
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  const mobileNumber = localStorage.getItem("mobileNumber");

  //   const employeeDetails = localStorage.getItem("employeeDetails");
  //   const employeeDetailsObject = JSON.parse(employeeDetails);

  // const firstName = employeeDetailsObject.firstName;
  //   const lastName = employeeDetailsObject.lastName;
  //   const email = employeeDetailsObject.email;
  //   const password = employeeDetailsObject.password;
  //   const mobileNumber = employeeDetailsObject.mobileNumber;

  const EditProfile = () => {
    Navigate("/editprofile");
  };

  const logout = () => {
    localStorage.clear();
    // localStorage.removeItem('firstName');
    alert("Logout succesfully..........!!!!!");
    Navigate("/register");
  };
  return (
    <div class="container">
      <div class="">
        <Navbar />
      </div>
      <div class=" emp-profile">
        <form method="post">
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  alt=""
                />
                <div class="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-head">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Profile Details
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>{"First Name = " + firstName}</h3>
                <h3>{"Last Name = " + lastName}</h3>
                <h3>{"Email = " + email}</h3>
                <h3>{"Password = " + password}</h3>
                <h3>{"Mobile Number = " + mobileNumber}</h3>
              </div>
              <br />
              <div class="col-md-4 d-flex " style={{ marginLeft: "180px" }}>
                <button type="submit" class="btn btn-primary" onClick={logout}>
                  Logout
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                  to="/editprofile"
                  className="btn btn-primary"
                  onClick={EditProfile}
                >
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
