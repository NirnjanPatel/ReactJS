import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./HeaderComponent/Header";
import Nav from "./NavComponent/Nav";
import Ourcontent from "./OurcontentComponent/Ourcontent";
import Footer from "./FooterComponent/Footer";
import Banner from "./BannerComponent/Banner";
import Home from "./HomeComponent/Home";
import About from "./AboutComponent/About";
import Contact from "./ContactComponent/Contact";
import Service from "./ServiceComponent/Service";
import Register from "./RegisterComponent/Register";
import VerifyUser from "./VerifyuserComponent/Verifyuser";
import Login from "./LoginComponent/Login";
import Logout from "./LogoutComponent/Logout";
import Adminhome from "./AdminhomeComponent/Adminhome";
import Manageuser from "./ManagerUsersComponent/Manageuser";
import Addcategory from "./AddCategoryComponent/Addcategory";
import AddSubcategory from "./AddSubCategoryComponent/AddSubcategory";
import AddProperty from "./AddPropertyComponent/AddProperty";
import Epadmin from "./epadminComponent/Epadmin";
import Userhome from "./UserhomeComponent/Userhome";
import ViewProperty from "./viewpropertyComponent/ViewProperty";
import ViewSubCat from "./ViewsubcatComponent/ViewSubCat";
import Error from "./AboutComponent/Error";

function App() {
  return (
    <div class="wrapper">
      {/* wrapper starts */}

      {/* Top Bar Start */}
      <Header />
      {/* Top Bar End */}

      {/* Nav Bar Start */}
      <Nav />
      {/* Nav Bar End */}

      {/* Banner Start */}
      <Banner />
      {/* Banner End */}

      {/* content start */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/verifyuser/:email" element={<VerifyUser />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/admin" element={<Adminhome />}></Route>
        <Route path="/admin/manageusers" element={<Manageuser />}></Route>
        <Route path="/admin/addcategory" element={<Addcategory />}></Route>
        <Route
          path="/admin/addsubcategory"
          element={<AddSubcategory />}
        ></Route>
        <Route path="/admin/addproperty" element={<AddProperty />}></Route>
        <Route path="/epadmin" element={<Epadmin />}></Route>
        <Route path="/user/" element={<Userhome />}></Route>
        <Route path="/user/viewproperty" element={<ViewProperty />}></Route>
        <Route path="/user/viewsubcat/:catnm" element={<ViewSubCat />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>

      <Ourcontent />
      {/* Content Start */}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
