import { React } from "react";
import userDetails from "./API";
import { useState } from "react";

const UserDetails = () => {
  const [search, setNewSearch] = useState("");

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? userDetails
    : userDetails.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );

  // const item = userDetails.map((item) => {
  //   return item;
  // });

  return (
    <>
      <div
        class="body"
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          padding: "15px",
        }}
      >
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">
            HomePage
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item ">
                <a class="nav-link" href="/">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/register">
                  Register
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">
                  Profile
                </a>
              </li>
            </ul>
          </div>

          <div class="d-flex align-items-center">
            <a href="/login">
              <button type="button" class="btn btn-primary m-2 me-3 px-3">
                Login
              </button>
            </a>
            <a href="/register">
              <button type="button" class="btn btn-primary m-2 me-3">
                Sign up
              </button>
            </a>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={handleSearchChange}
              />
              <button
                class="btn btn-outline-primary my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>

        <h1>User Details of an API</h1>
        <table class="table table-bordered">
          <thead style={{ fontSize: "19px" }} class="thead-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Street</th>
              <th>city</th>
              <th>Zipcode</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr>
                <th>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
                <td>{item.address.zipcode}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>{item.company.bs}</td>
                <td>{item.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserDetails;

// for (let index of userDetails) {
//     for (let i in index) {
//         if (typeof index[i] === typeof {}) {
//           for (let key in index[i]) {
//             console.log(index[i][key]);
//           }
//         } else {
//           console.log(index[i]);
//         }
//     }
// }
