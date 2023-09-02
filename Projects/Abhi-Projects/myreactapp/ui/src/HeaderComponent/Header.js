import { useEffect, useState } from "react";
import "./Header.css";
import AdminHeader from "../HeaderComponent/AdminHeader";
import UserHeader from "../HeaderComponent/UserHeader";
import VisitorHeader from "../HeaderComponent/VisitorHeader";

function Header() {
  const [HeaderContent, setHeaderContent] = useState();
  const [trackemail, setTrackEmail] = useState(localStorage.getItem("email"));

  // useEffect(() => {
  //   setInterval(() => {
  //     if (localStorage.getItem("role") == "admin") {
  //       setHeaderContent(<AdminHeader />);
  //     } else if (localStorage.getItem("role") === "user") {
  //       setHeaderContent(<UserHeader />);
  //     } else {
  //       setHeaderContent(<VisitorHeader />);
  //     }
  //   }, 1000);
  // }, []);

  useEffect(() => {
    if (localStorage.getItem("role") == "admin") {
      setHeaderContent(<AdminHeader />);
    } else if (localStorage.getItem("role") === "user") {
      setHeaderContent(<UserHeader />);
    } else {
      setHeaderContent(<VisitorHeader />);
    }
  }, []);

  return (
    <div>
      <div class="wrapper" id="header_padding">
        {/* Top Bar Start */}
        <div class="top-bar">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-lg-4 col-md-12 mt-2 mb-2">
                <div class="logo">
                  <h1 style={{ "font-size": "30px", color: "#200769" }}>
                    RoomRent.com
                  </h1>
                </div>
              </div>
              <div class="col-lg-8 col-md-7 d-none d-lg-block">
                {HeaderContent}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header inner */}
    </div>
  );
}

export default Header;
