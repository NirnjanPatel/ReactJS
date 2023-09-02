import "./Nav.css";
import { useEffect, useState } from "react";
import UserNav from "./UserNav";
import AdminNav from "./AdminNav";
import VisitorNav from "./VisitorNav";

function Nav() {
  const [menulist, setMenuState] = useState();

  useEffect(() => {
    if (localStorage.getItem("role") == "admin") {
      setMenuState(<AdminNav />);
    } else if (localStorage.getItem("role") == "user") {
      setMenuState(<UserNav />);
    } else {
      setMenuState(<VisitorNav />);
    }
  }, []);

  return (
    <header>
      {/* header inner */}
      <div class="header-top">
        <div class="header">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-2 col-lg-4 col-md-4 col-sm-3 col logo_section">
                <div class="full">
                  <div class="center-desk">
                    <div class="logo">
                      <a href="/">
                        <img
                          src="images/robotlogo.jpg"
                          style={{ height: "70px" }}
                          alt="#"
                        />
                      </a>
                      <p> we work online </p>
                      <p style={{ color: "blue" }}>
                        &nbsp;&nbsp;&nbsp; Make your work easy{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-10 col-lg-8 col-md-8 col-sm-9">{menulist}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
