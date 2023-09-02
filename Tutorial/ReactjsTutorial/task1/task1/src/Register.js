import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./validation.css";

import showPwdImg from "../src/show_password.svg";
import hidePwdImg from "../src/hide_password.svg";

const SignUp = () => {
  const Navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const [firstNameError, setfirstNameError] = useState("");
  const [lastNameError, setlastNameError] = useState("");
  const [emailError, setemailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cPasswordError, setcPasswordError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");

  const [isRevealPwd, setIsRevealPwd] = useState(false);

  const firstNameRegex = /^[a-zA-Z ]+$/;
  const lastNameRegex = /^[a-zA-Z ]+$/;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const cPasswordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const mobileNumberRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    // first name validation

    if (
      firstName.length < 3 ||
      firstName.length > 10 ||
      !firstNameRegex.test(firstName)
    ) {
      setfirstNameError("Enter a valid first name");
    } else {
      setfirstNameError("");
      localStorage.setItem("firstName", firstName);
    }
    // last name validation
    if (
      lastName.length < 3 ||
      lastName.length > 10 ||
      !lastNameRegex.test(lastName)
    ) {
      setlastNameError("Enter valid last name");
    } else {
      setlastNameError("");
      localStorage.setItem("lastName", lastName);
    }
    // email validation
    if (!emailRegex.test(email)) {
      setemailError("Enter valid email");
    } else {
      setemailError("");
      localStorage.setItem("email", email);
    }
    // password validation
    if (!passwordRegex.test(password)) {
      setPasswordError("Enter valid password");
    } else {
      setPasswordError("");
      localStorage.setItem("password", password);
    }
    // confirm password validation
    if (!cPasswordRegex.test(confirmPassword) || confirmPassword !== password) {
      setcPasswordError("Enter valid confirm password");
    } else {
      setConfirmPassword("");
      localStorage.setItem("confirmPassword", confirmPassword);
    }
    // mobile number validation
    if (
      mobileNumber.length < 3 ||
      mobileNumber.length > 10 ||
      !mobileNumberRegex.test(mobileNumber)
    ) {
      setMobileNumberError("Enter valid mobile number");
    } else {
      setMobileNumberError("");
      localStorage.setItem("mobileNumber", mobileNumber);
      alert("Registration successfull...!!!");
      Navigate("/login");
    }
  };

  return (
    <div class="container needs-validation">
      <div class="container">
        <Navbar />
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
                  //   required
                  onChange={(e) => setFirstName(e.target.value)}
                  // onKeyUp={}
                />
              </div>
              <span className="errorMsg"> {firstNameError}</span>
              <div class="form-group p-3">
                <input
                  type="text"
                  placeholder="Enter last name"
                  class="form-control"
                  id="lastName"
                  name="lastName"
                  //   required
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <span className="errorMsg"> {lastNameError}</span>
              <div class="form-group p-3">
                <input
                  type="email"
                  placeholder="Enter email"
                  class="form-control"
                  id="email"
                  name="email"
                  //   required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <span className="errorMsg"> {emailError}</span>
              <div class="form-group p-3 sh-field">
                <input
                  type={isRevealPwd ? "text" : "password"}
                  placeholder="Enter password"
                  class="form-control"
                  name="password"
                  //   required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  className="sh-img "
                  title={isRevealPwd ? "Hide password" : "Show password"}
                  src={isRevealPwd ? hidePwdImg : showPwdImg}
                  onClick={() => setIsRevealPwd((prevState) => !prevState)}
                />
              </div>
              <div class="form-group p-3">
                <input
                  type={isRevealPwd ? "text" : "password"}
                  placeholder="Confirm password"
                  class="form-control"
                  id="cPassword"
                  name="cPassword"
                  //   required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <span className="errorMsg"> {cPasswordError}</span>
              <div class="form-group p-3 maxlength=10">
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  class="form-control"
                  id="mobile"
                  name="mobile"
                  //   required
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
              <span className="errorMsg"> {mobileNumberError}</span>
              <br />
              <br />
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
