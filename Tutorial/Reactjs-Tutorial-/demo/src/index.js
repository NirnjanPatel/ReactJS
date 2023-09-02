import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import State from "./State";
import ClassComponent from "./ClassComponent";
import StateInClass from "./StateInClass";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <State /> */}
    {/* <ClassComponent /> */}
    <StateInClass />
  </React.StrictMode>
);

reportWebVitals();
