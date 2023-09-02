import './App.css';
import { Routes , Route } from 'react-router-dom';

import Header from './HeaderComponent/Header';
import Nav from './NavComponent/Nav'; 
import Banner from './BannerComponent/Banner';
import Main from './MainComponent/Main';
import Footer from './FooterComponent/Footer';
import About from './AboutComponent/About';
import Contact from './ContactComponent/Contact';
import Service from './ServiceComponent/Service';
import Register from './RegisterComponent/Register';
import Login from './LoginComponent/Login';

function App() {
  return (
            
            <div class="wrapper" >
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
            
{/* Content Start */}   
<Routes>
  <Route path="/" element={<Main />} ></Route>
  <Route path="/about" element={<About />} ></Route>
  <Route path="/contact" element={<Contact />} ></Route>
  <Route path="/service" element={<Service />} ></Route>
  <Route path="/register" element={<Register />} ></Route>
  <Route path="/login" element={<Login />} ></Route>
</Routes>            
{/* Content End */}

            {/* Footer Start */}
            <Footer />
            {/* Footer End */}

            <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
        {/* wrapper ends */}
        </div>
        
  );
}

export default App;


