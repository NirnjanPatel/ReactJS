import { isEmpty } from "lodash";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navigbar from "./Navigbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();

  const [formError, setFormError] = useState({});

  // Taking local storage data-signup details
  const localData = localStorage.getItem("Sign-up Details");
  const sData = JSON.parse(localData);
  const sEmail = sData.mail;
  const sPassword = sData.password;

  const [entry, entries] = useState({
    mail: "",
    password: "",
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    entries({ ...entry, [name]: value });
  };

  const errors = {};

  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.mail) {
      errors.mail = "Email is required";
    } else if (!regex.test(values.mail)) {
      errors.mail = "This is not a valid email";
    } else if (sEmail != values.mail) {
      errors.mail = "Email you are entered is not signed up";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "password must be minimum of 6 characters";
    } else if (values.password.length > 12) {
      errors.password = "Password cannot exceeds more than 12 characters";
    } else if (sPassword != values.password) {
      errors.password = "Password you are entered is not correct";
    }

    setFormError(errors);
  };

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate(entry);
    if (isEmpty(errors)) {
      toast("You are log-in sucessfully");
      setTimeout(() => {
        navigate("/profile");
      }, 4000);
    }
  };

  return (
    <div>
      <Navigbar />
      <div class="container">
        <div class="row">
          <div class="col-3"></div>
          <div class="col-6">
            <form style={{ borderRadius: "10px", backgroundColor: "#a9c8ff" }}>
              <div>
                <input
                  style={{ fontSize: "17px" }}
                  type="email"
                  name="mail"
                  value={entry.mail}
                  placeholder="Email"
                  class="form-control"
                  onChange={handleChange}
                  id="inputEmail"
                />
              </div>
              <p class="text-danger">{formError.mail}</p>
              <br />

              <div class="input-group">
                <input
                  style={{ fontSize: "17px" }}
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  value={entry.password}
                  placeholder="Password"
                  class="form-control"
                  onChange={handleChange}
                  id="inputPassword"
                />
                <button
                  className="input-group-text bg-transparent"
                  onClick={togglePassword}
                >
                  {!passwordShown ? (
                    <i className="fa fa-eye-slash password-icon"></i>
                  ) : (
                    <i className="fa fa-eye password-icon"></i>
                  )}
                </button>
              </div>
              <p class="text-danger">{formError.password}</p>
              <br />
              <button
                type="submit"
                onClick={handleSubmit}
                style={{ fontSize: "17px" }}
                class="btn btn-primary"
              >
                Log In
              </button>
            </form>
          </div>
          <div class="col-3"></div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
