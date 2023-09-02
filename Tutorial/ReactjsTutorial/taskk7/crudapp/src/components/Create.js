import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Empolyees from "./Employees";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const ids = uuidv4();
    let uniqueId = ids.slice(0, 8);

    let a = name;
    let b = age;

    Empolyees.push({ id: uniqueId, Name: a, Age: b });
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div class="container">
        <div class="row ">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <Form
              className="d-grid gap-2 "
              style={{
                margin: "15rem",
                border: "1px solid black",
                padding: "35px",
                borderRadius: "15px",
              }}
            >
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAge">
                <Form.Control
                  type="text"
                  placeholder="Enter Age"
                  required
                  onChange={(e) => setAge(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <div>
                <button
                  onClick={(e) => handleSubmit(e)}
                  class="btn btn-primary btn-lg"
                  type="submit"
                >
                  Create
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
