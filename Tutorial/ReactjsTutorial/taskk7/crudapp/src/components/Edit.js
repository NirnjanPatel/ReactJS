import { Button, Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

import React, { Fragment, useState, useEffect } from "react";

const Edit = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

  var index = Employees.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleEdit = (e) => {
    e.preventDefault();
    let a = Employees[index];
    a.Name = name;
    a.Age = age;

    history("/");
  };

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setId(localStorage.getItem("Id"));
  }, []);

  return (
    <>
      <Navbar />
      <div class="container">
        <div class="row ">
          <div class="col-md-2"></div>
          <div class="col-md-8 ">
            <Form
              className="d-grid gap-2 form-group"
              style={{
                margin: "15rem",
                border: "1px solid black",
                padding: "40px",
                borderRadius: "10px",
              }}
            >
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAge">
                <Form.Control
                  type="text"
                  placeholder="Enter Age"
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <div>
                <button
                  onClick={(e) => handleEdit(e)}
                  class="btn btn-primary btn-lg"
                  style={{ padding: "10px", width: "100px" }}
                  type="submit"
                >
                  Edit
                </button>
              </div>
            </Form>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default Edit;
