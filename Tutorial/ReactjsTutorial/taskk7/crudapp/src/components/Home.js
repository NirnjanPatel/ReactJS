import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  let history = useNavigate();

  const handleEdit = (id, name, age) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Id", id);
  };

  const handleDelete = (id) => {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);

    Employees.splice(index, 1);
    history("/");
  };

  return (
    <div>
      <Navbar />
      <div class="container">
        <div class="row ">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <Fragment>
              <div style={{ margin: "10rem" }}>
                <Table
                  striped
                  hover
                  size=""
                  style={{ border: "1px solid black" }}
                  // cellSpacing="12px"
                  // cellPadding="23px"
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Employees && Employees.length > 0
                      ? Employees.map((item) => {
                          return (
                            <tr>
                              <td>{item.Name}</td>
                              <td>{item.Age}</td>
                              <td>
                                <Link to={"/edit"}>
                                  <Button
                                    onClick={() =>
                                      handleEdit(item.id, item.Name, item.Age)
                                    }
                                  >
                                    Edit
                                  </Button>{" "}
                                  &nbsp;
                                </Link>
                                <Button onClick={() => handleDelete(item.id)}>
                                  Delete
                                </Button>
                              </td>
                            </tr>
                          );
                        })
                      : "No data found"}
                  </tbody>
                </Table>
                <br />
                <div style={{}}>
                  <Link
                    to="/create"
                    className="d-flex"
                    style={{ maxWidth: "150px" }}
                  >
                    <Button size="lg">Create</Button>
                  </Link>
                </div>
              </div>
            </Fragment>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
