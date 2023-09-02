import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import showPwdImg from "../src/show_password.svg";
import hidePwdImg from "../src/hide_password.svg";
import "./validation.css";

const Login = () => {
  const Navigate = useNavigate();
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const loginEmail = localStorage.getItem("email");
    const loginPassword = localStorage.getItem("password");

    if (loginEmail === email && loginPassword === password) {
      alert("Login successfull...!!!");
      Navigate("/profile");
    } else {
      alert("Login Failed.........!!!!!!!!!");
    }
  };

  return (
    <div class="container">
      <div class="">
        <Navbar />
      </div>
      <div class="row ">
        <div class="col-md-3"></div>
        <div class="col-lg-6 col-md-6 p-3" style={{ background: "#e3dfee" }}>
          <div class="about-text p-3">
            <h2>Login Here!!!</h2>
            <form onSubmit={Login}>
              <div class="form-group p-3 ">
                <input
                  type="email"
                  placeholder="Enter email"
                  class="form-control"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="form-group p-3 sh-field">
                <input
                  type={isRevealPwd ? "text" : "password"}
                  placeholder="Enter password"
                  class="form-control"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  className="sh-img "
                  title={isRevealPwd ? "Hide password" : "Show password"}
                  src={isRevealPwd ? hidePwdImg : showPwdImg}
                  onClick={() => setIsRevealPwd((prevState) => !prevState)}
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary col-lg-6"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
