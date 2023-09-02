import "./About.css";
import { useState } from "react";

import React from "react";

function About() {
  const [a, setA] = useState(20);
  const [b, setB] = useState(30);
  const [count, setCount] = useState(0);
  const [cDate, setDate] = useState(Date());
  const [mks, setMks] = useState([23, 43, 3, 2, 34, 2, 3, 43]);
  const [users, setUser] = useState({
    uid: 1,
    username: "admin@gmail",
    password: 12345678,
  });

  setTimeout(() => {
    setDate(Date());
  }, 1000);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <div id="about" class="about">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="about-box">
              {/* <h1>user Details : iterate object </h1> */}
              {/* {Object.values(users).map((value) => (
                <p>{value}</p>
              ))} */}
              <hr />
              {/* <h1>user Details : manual access</h1>
              <p>UserID : {users.uid}</p>
              <p>Username : {users.username}</p>
              <p>password : {users.password}</p>
              <hr />
              <h1>Marks list : loop access</h1>
              {mks.map((x, i) => (
                <p>
                  mak{i}--{x}
                </p>
              ))} */}
              {/* <h1>Marks list : manual access</h1>
              <p>marks 1 : {mks[0]}</p>
              <p>marks 2 : {mks[1]}</p>
              <p>marks 3 : {mks[2]}</p>
              <p>marks 4 : {mks[3]}</p>
              <p>marks 5 : {mks[4]}</p>
              <p>marks 6 : {mks[5]}</p>
              <p>marks 7 : {mks[6]}</p>
              <p>marks 8 : {mks[7]}</p>
              <h2>Counter : {count} </h2> */}
              {/* <button onClick={handleIncrement}> + </button>
              &nbsp;&nbsp;
              <button onClick={handleDecrement}> - </button>
              <br />
              <hr />
              <br />
              <h2>Add</h2>
              <p>a ={a}</p>
              <p>b ={b}</p>
              <p> add = {a + b} </p>
              <hr />
              <hr />
              <h1> Current Date and Time </h1>
              <h3>current date and time :{cDate}</h3> */}
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
