import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <div class="container">
      <div class="container p-2">
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
          <a class="navbar-brand" href="/">
            Home Page
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="/">
                Home <span class="sr-only">()</span>
              </a>
              <a class="nav-item nav-link" href="/register">
                Register
              </a>
              {/* <a class="nav-item nav-link" href="/registerobject">Register Object</a> */}
              <a class="nav-item nav-link" href="/login">
                Login
              </a>
              {/* <a class="nav-item nav-link" href="/loginobject">Login Object</a> */}
              <a class="nav-item nav-link " href="/profile">
                Profile
              </a>
              <a class="nav-item nav-link " href="/contact">
                Contact
              </a>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <a href="/login">
              <button type="button" class="btn btn-primary me-3 px-3">
                Login
              </button>
            </a>
            <a href="/register">
              <button type="button" class="btn btn-primary me-3">
                Sign up
              </button>
            </a>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
