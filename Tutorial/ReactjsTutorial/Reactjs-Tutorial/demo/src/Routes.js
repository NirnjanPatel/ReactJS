// Routing - a process in which a user is directed to different pages based on their action or request.ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application.

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App2() {
  return (
    // to bind routes 
    <BrowserRouter>
      {/* if we having more than one route like - User, Admin, Visitor than we will use more than one route  */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/layout" element={<Layout />} />
        <Route exact path="blogs" element={<Blogs />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App2;