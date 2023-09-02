import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./SignupBootdtrap.css";
import Navigbar from "./Navigbar";
import { isEmpty } from "lodash";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserList from "../Crudoperations/UserList";

export default function SignupBoottrap() {
  const navigate = useNavigate();
  const [users, setUsers] = useState(UserList);
  const id = users.length + 1;
  const [entry, entries] = useState({
    id: null,
    firstName: "",
    lastName: "",
    mail: "",
    password: "",
    confirmPassword: "",
    contact: "",
  });

  const [formError, setFormError] = useState({});
  const [passwordShown, setpasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const [records, setRecords] = useState([]);
  const errors = {};

  const handlechange = (e) => {
    const { name, value } = e.target;
    entries({ ...entry, [name]: value }); // {...} this is here spread operator we use
  };

  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const numRegex = /^[0-9\b]+$/;

    if (!values.firstName) {
      errors.firstName = "First name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required";
    }

    if (!values.mail) {
      errors.mail = "Email is required";
    } else if (!regex.test(values.mail)) {
      errors.mail = "This is not a valid email";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "password must be minimum of 6 characters";
    } else if (values.password.length > 12) {
      errors.password = "Password cannot exceeds more than 12 characters";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (values.confirmPassword.length < 6) {
      errors.confirmPassword = "password must be minimum of 6 character";
    } else if (values.confirmPassword.length > 12) {
      errors.confirmPassword =
        "Password cannot exceeds more than 12 characters";
    }

    if (values.password != values.confirmPassword) {
      errors.confirmPassword = "Password should be same";
    }

    if (!values.contact) {
      errors.contact = "Phone number is required";
    } else if (values.contact.length > 10 || values.contact.length < 10) {
      errors.contact = "Phone Number should be exactly 10";
    } else if (!numRegex.test(values.contact)) {
      errors.contact = "Type only phone numbers only";
    }

    setFormError(errors);
  };

  const togglePassword = (e) => {
    e.preventDefault();
    setpasswordShown(!passwordShown);
  };

  const toggleConfirmPassword = (e) => {
    e.preventDefault();
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(entry);
    if (isEmpty(errors)) {
      setUsers(
        UserList.push({
          id: id,
          firstname: entry.firstName,
          lastname: entry.lastName,
          mail: entry.mail,
          password: entry.password,
          contact: entry.contact,
        })
      );
      localStorage.setItem("Sign-up Details", JSON.stringify(entry));
      toast("Data is Submitted Successfully");
      setTimeout(() => {
        navigate("/login");
      }, 4000);
    }
  };

  return (
    <div>
      <Navigbar />
      <div class="container">
        <div class="row">
          <div class="col-2"></div>
          <div class="col-8">
            <div class="row">
              <div class="col-2"></div>

              <div class="col-8">
                <form
                  style={{ borderRadius: "10px", backgroundColor: "#a9c8ff" }}
                >
                  <div>
                    <input
                      style={{ fontSize: "17px" }}
                      type="text"
                      name="firstName"
                      value={entry.firstName}
                      onChange={handlechange}
                      class="form-control"
                      id="inputFirstName4"
                      placeholder="First Name"
                    />
                  </div>
                  <p class="text-danger">{formError.firstName}</p>
                  <br />
                  <div>
                    <input
                      style={{ fontSize: "17px" }}
                      type="text"
                      class="form-control"
                      onChange={handlechange}
                      name="lastName"
                      value={entry.lastName}
                      id="inputLastName4"
                      placeholder="Last Name"
                    />
                  </div>
                  <p class="text-danger">{formError.lastName}</p>
                  <br />
                  <div>
                    <input
                      style={{ fontSize: "17px" }}
                      type="email"
                      name="mail"
                      value={entry.mail}
                      class="form-control"
                      id="inputEmail4"
                      onChange={handlechange}
                      placeholder="Email"
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
                      class="form-control"
                      id="inputPassword4"
                      onChange={handlechange}
                      placeholder="Password"
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
                    {/* <input type="checkbox" onClick={togglePassword} /> */}
                  </div>
                  <p class="text-danger">{formError.password}</p>
                  <br />

                  <div class="input-group">
                    <input
                      style={{ fontSize: "17px" }}
                      type={confirmPasswordShown ? "text" : "password"}
                      name="confirmPassword"
                      value={entry.confirmPassword}
                      class="form-control"
                      onChange={handlechange}
                      id="inputConfirmPassword4"
                      placeholder="Confirm Password"
                    />
                    <button
                      onClick={toggleConfirmPassword}
                      className="input-group-text bg-transparent"
                    >
                      {!confirmPasswordShown ? (
                        <i className="fa fa-eye-slash password-icon"></i>
                      ) : (
                        <i className="fa fa-eye password-icon"></i>
                      )}
                    </button>
                    {/* <span
                      onClick={toggleConfirmPassword}
                      for="icon"
                      class="p-viewer but88"
                    >
                      {!confirmPasswordShown ? (
                        <i className="fa fa-eye password-icon" />
                      ) : (
                        <i className="fa fa-eye-slash password-icon" />
                      )}
                    </span> */}
                    {/* <input type="checkbox" onClick={toggleConfirmPassword} /> */}
                  </div>
                  <p class="text-danger">{formError.confirmPassword}</p>
                  <br />
                  <div>
                    <input
                      style={{ fontSize: "17px" }}
                      type="text"
                      name="contact"
                      value={entry.contact}
                      onChange={handlechange}
                      class="form-control"
                      id="inputContact4"
                      placeholder="Contact Number"
                    />
                  </div>
                  <p class="text-danger">{formError.contact}</p>
                  <br />
                  {/* <button  type="submit" class="btn btn-primary" onClick={Navigate('/login')} > */}
                  <button
                    style={{ fontSize: "17px" }}
                    type="submit"
                    class="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </button>
                </form>
              </div>

              <div class="col-2"></div>
            </div>
          </div>
          <div class="col-2"></div>
        </div>
        <br />
        <br />
        <ToastContainer />
      </div>
    </div>
  );
}
