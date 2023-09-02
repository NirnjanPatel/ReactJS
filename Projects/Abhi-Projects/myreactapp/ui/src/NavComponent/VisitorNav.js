import React from "react";
import { Link } from "react-router-dom";

const VisitorNav = () => {
  return (
    <div class="header_information">
      <div class="">
        <div class="limit-box">
          <nav class="main-menu ">
            <ul class="menu-area-main">
              <li class="active">
                {" "}
                <a>
                  <Link style={{ color: "white" }} to="/">
                    {" "}
                    Home
                  </Link>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a>
                  <Link style={{ color: "white" }} to="/about">
                    {" "}
                    About
                  </Link>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a>
                  <Link style={{ color: "white" }} to="/contact">
                    {" "}
                    Contact{" "}
                  </Link>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a>
                  <Link style={{ color: "white" }} to="/service">
                    {" "}
                    Service
                  </Link>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a>
                  <Link style={{ color: "white" }} to="/register">
                    {" "}
                    Register
                  </Link>
                </a>{" "}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class=" mean-last">
        <a>
          <img src="images/search_icon.png" alt="#" />
        </a>{" "}
        <a>
          <Link style={{ color: "white" }} to="/login">
            {" "}
            Login
          </Link>
        </a>
      </div>
    </div>
  );
};

export default VisitorNav;
