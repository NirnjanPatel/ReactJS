import React from "react";
import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <div class="header_information">
      <div class="">
        <div class="limit-box">
          <nav class="main-menu ">
            <ul class="menu-area-main">
              <li class="active">
                {" "}
                <a>
                  <Link style={{ color: "white" }} to="/user">
                    User Home
                  </Link>
                </a>{" "}
              </li>
              <li class="active">
                {" "}
                <a>
                  <Link style={{ color: "white" }} to="/user/viewproperty">
                    View Property
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
          <Link style={{ color: "white" }} to="/logout">
            {" "}
            Logout
          </Link>
        </a>
      </div>
    </div>
  );
};

export default UserNav;
