// The Layout component has <Outlet> and <Link> elements.
// <Link> - to link an internal path
// <a> - also add an link

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";


function PagesComponents() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route  path="/layout"  element={<Layout/>} />
          <Route  path="/blogs"  element={<Blogs/>} />
          <Route  path="/contact"  element={<Contact/>} />
          <Route  path="*"  element={<NoPage/>} />
      </Routes>
      </BrowserRouter>
  )
}

export default PagesComponents;