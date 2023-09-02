import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { _webapi } from "../BaseAPIurls";

function Register() {
  const [output, setOutput] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let userDetails = {
      name: name,
      email: email,
      password: password,
      address: address,
      mobile: mobile,
      city: city,
      gender: gender,
    };
    // console.log(userDetails);

    axios
      .post(_webapi + "register", userDetails)
      .then((response) => {
        console.log(response.data.result);
        setOutput(response.data.result);
        setName("");
        setEmail("");
        setPassword("");
        setAddress("");
        setCity("");
        setMobile("");
        alert("Its done.....");
      })
      .catch((err) => {});
  };
  return (
    <div class="row">
      <div class="col-1" id="col1"></div>
      <div class="col-6" id="registerForm">
        <h2>HTML Forms</h2>
        <font
          style={{ color: "blue", "font-weight": "800", "font-size": "16px" }}
        >
          {" "}
          {output}
        </font>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="name" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
            />
          </div>

          <div class="mb-3">
            <label for="pwd" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="mobile" class="form-label">
              Mobile
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="enter mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">
              address
            </label>
            <textarea
              class="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows="3"
            ></textarea>
          </div>
          <div>
            <label for="city">City:</label>
            <select
              class="form-control"
              aria-label="Default select example"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option selected>Select City</option>
              <option>Pune</option>
              <option>Indore</option>
              <option>Dewas</option>
              <option>Bhopal</option>
            </select>
          </div>
          <div>
            <label for="check">Gender:</label>&nbsp;&nbsp;
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) => setGender(e.target.value)}
            />
            Male &nbsp;&nbsp;
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) => setGender(e.target.value)}
            />
            Female &nbsp;&nbsp;
          </div>

          <button type="submit" class="btn btn-success">
            Submit
          </button>
        </form>
      </div>
      <div class="col-5" id="col1"></div>
    </div>
  );
}

export default Register;
