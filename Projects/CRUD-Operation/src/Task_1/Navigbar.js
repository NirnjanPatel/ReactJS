import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useNavigate } from "react-router";

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";

export default function Navigbar() {
  const navigate = useNavigate();
  const clearLocalData = (e) => {
    e.preventDefault();
    localStorage.clear("Sign-up Details");
    navigate("/");
  };

  const navigateToLogin = (e) => {
    // e.preventDefault();
    navigate("/login");
  };

  const navigateToSignup = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const navigateToProfile = (e) => {
    e.preventDefault();
    navigate("/profile");
  };
  const navigateToHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const navigateToUserDetails = (e) => {
    e.preventDefault();
    navigate("/userdetails");
  };

  const navigateToFetchApi = (e) => {
    e.preventDefault();
    navigate("/fetchapi");
  };
  const navigateToCreateApi = (e) => {
    e.preventDefault();
    navigate("/create");
  };
  const navigateToReadApi = (e) => {
    e.preventDefault();
    navigate("/read");
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{ fontSize: "22px" }} onClick={navigateToHome}>
            ReactJS-Demo-App
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link class="nitem" onClick={navigateToHome}>
              Home
            </Nav.Link>
          </Nav>
          <ul class="nav navbar-nav navbar-right">
            <ButtonGroup aria-label="Basic example">
              <Button
                style={{ fontSize: "17px" }}
                onClick={navigateToSignup}
                variant="danger"
              >
                Sign-up
              </Button>
              <Button
                style={{ fontSize: "17px" }}
                onClick={navigateToLogin}
                variant="danger"
              >
                log-In
              </Button>
              <Button
                style={{ fontSize: "17px" }}
                onClick={clearLocalData}
                variant="danger"
              >
                Log-Out
              </Button>
            </ButtonGroup>
          </ul>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}
