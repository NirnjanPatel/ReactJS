import React from "react";

const FakeAPI = () => {
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
              <a class="nav-item nav-link" href="/">
                Home <span class="sr-only"></span>
              </a>
              <a class="nav-item nav-link" href="/create">
                Create
              </a>
              {/* <a class="nav-item nav-link" href="/registerobject">Register Object</a> */}
              <a class="nav-item nav-link" href="/edit">
                Edit
              </a>
              {/* <a class="nav-item nav-link" href="/loginobject">Login Object</a> */}
              <a class="nav-item nav-link " href="/delete">
                Delete
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
                Signup
              </button>
            </a>
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            &nbsp;
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default FakeAPI;
