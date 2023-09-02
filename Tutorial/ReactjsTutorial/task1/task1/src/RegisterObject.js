import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import validation from "./validation";

const RegisterObject = () => {
  const Navigate = useNavigate();

  const emailValidator =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordValidator =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const mobileNumberValidator = /^(\+\d{1,3}[- ]?)?\d{10}$/;

  const [entry, setEntry] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cPassword: "",
    mobileNumber: "",

    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    cPasswordError: "",
    mobileNumberError: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEntry({ ...entry, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("employeeDetails", JSON.stringify(entry));
    alert("Registeration succesful");
    Navigate("/loginobject");
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
            <form onSubmit={handleSubmit}>
              <div class="form-group mt-5  p-3">
                <input
                  type="text"
                  placeholder="Enter first name"
                  class="form-control"
                  id="firstName"
                  name="firstName"
                  value={entry.firstName}
                  //   required
                  onChange={handleChange}
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
              </div>
              <span id="err1"></span>

              <div class="form-group p-3">
                <input
                  type="text"
                  placeholder="Enter last name"
                  class="form-control"
                  id="lastName"
                  name="lastName"
                  value={entry.lastName}
                  //   required
                  onChange={handleChange}
                />
              </div>
              <span id="err2"></span>

              <div class="form-group p-3">
                <input
                  type="email"
                  placeholder="Enter email"
                  class="form-control"
                  id="email"
                  name="email"
                  value={entry.email}
                  //   required
                  onChange={handleChange}
                />
              </div>
              <span id="err3"></span>
              <div class="form-group p-3">
                <input
                  type="password"
                  placeholder="Enter password"
                  class="form-control"
                  name="password"
                  value={entry.password}
                  //   required
                  onChange={handleChange}
                />
              </div>
              <span id="err4"></span>

              <div class="form-group p-3">
                <input
                  type="password"
                  placeholder="Confirm password"
                  class="form-control"
                  id="cPassword"
                  name="cPassword"
                  value={entry.cPassword}
                  //   required
                  onChange={handleChange}
                />
              </div>
              <span id="err5"></span>

              <div class="form-group p-3 maxlength=10">
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  class="form-control"
                  id="mobile"
                  name="mobileNumber"
                  value={entry.mobileNumber}
                  //   required
                  onChange={handleChange}
                />
              </div>
              <span id="err5"></span>
              <button
                type="submit"
                class="btn btn-primary col-lg-6"
                onclick={validation}
              >
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

export default RegisterObject;
