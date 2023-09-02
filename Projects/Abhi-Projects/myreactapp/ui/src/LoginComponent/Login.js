import "./Login.css";

import React from "react";
import { useState } from "react";
import axios from "axios";
import { _webapi } from "../BaseAPIurls";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [output, setOutput] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(email);
    setPassword(password);

    let userDetails = { email: email, password: password };
    // console.log(userDetails);

    axios
      .post(_webapi + "login", userDetails)
      .then((response) => {
        console.log(response.data);
        if (response.data.token != "error") {
          localStorage.setItem("token", response.data.token);
          let userdata = response.data.userDetails;
          localStorage.setItem("name", userdata.name);
          localStorage.setItem("email", userdata.email);
          localStorage.setItem("mobile", userdata.mobile);
          localStorage.setItem("address", userdata.address);
          localStorage.setItem("city", userdata.city);
          localStorage.setItem("gender", userdata.gender);
          localStorage.setItem("role", userdata.role);
          localStorage.setItem("info", userdata.info);

          response.data.userDetails.role == "admin"
            ? navigate("/admin")
            : navigate("/user");
        } else {
          setOutput("Invalid user or verify your account...");
          setEmail("");
          setPassword("");
        }
      })
      .catch((err) => {});
  };

  return (
    <div class="row">
      <div class="col-1" id="col1"></div>
      <div class="col-6" id="registerForm">
        <h2>Login here!!</h2>
        <font
          style={{ color: "blue", "font-weight": "800", "font-size": "16px" }}
        >
          {output}
        </font>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
            />
          </div>

          <div class="mb-3">
            <label for="pwd" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-success">
            Login
          </button>
        </form>
      </div>
      <div class="col-5" id="col1"></div>
    </div>
  );
}

export default Login;
