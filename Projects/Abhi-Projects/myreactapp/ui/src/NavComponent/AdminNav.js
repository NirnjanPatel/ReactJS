import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <div class="header_information">
      <div class="">
        <div class="limit-box">
          <nav class="main-menu ">
            <ul class="menu-area-main">
              <li class="active">
                {" "}
                <a>
                  <Link style={{ color: "white" }} to="/admin">
                    Admin Home
                  </Link>
                </a>{" "}
              </li>
              <li class="">
                {" "}
                <a>
                  <Link style={{ color: "white" }} to="/admin/manageusers">
                    ManageUsers
                  </Link>
                </a>{" "}
              </li>
              <li class="">
                {" "}
                <a>
                  <Link style={{ color: "white" }} to="/admin/addcategory">
                    Addcategory
                  </Link>
                </a>{" "}
              </li>
              <li class="">
                {" "}
                <a>
                  <Link style={{ color: "white " }} to="/admin/addsubcategory">
                    AddSubcategory
                  </Link>{" "}
                </a>
              </li>
              {/* <li class=""><a><Link style={{ 'color': 'white' }} to="/addproperty">Add Property</Link> </a></li> */}
              <li class="">
                {" "}
                <a>
                  <Link style={{ color: "white" }} to="/admin/addproperty">
                    Property
                  </Link>
                </a>
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

export default AdminNav;
