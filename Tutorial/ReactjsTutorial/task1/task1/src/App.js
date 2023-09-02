import "./App.css";
import Register from "./Register";
// import RegisterObject from "./RegisterObject";
import Login from "./Login";
// import LoginObject from "./LoginObject";
import Profile from "./Profile";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import EditProfile from "./EditProfile";
import FormValidation from "./FormValidation";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        {/* <Route exact path="/registerobject" element={<RegisterObject />} /> */}
        <Route exact path="/login" element={<Login />} />
        {/* <Route exact path="/loginobject" element={<LoginObject />} /> */}
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/editprofile" element={<EditProfile />} />
        <Route exact path="/formvalidation" element={<FormValidation />} />
      </Routes>
    </div>
  );
}

export default App;
