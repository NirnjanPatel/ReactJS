import React from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

const App1 = () => {
  
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <Home/>} />
                <Route path='/Layout' element={ <Layout/>} />
                <Route path='/Blogs' element={ <Blogs/>} />
                <Route path='/Contact' element={ <Contact/>} />
                <Route path='*' element={ <NoPage/>} />
        </Routes>
        </BrowserRouter>

        // <p>THis is </p>
  )
}

export default App1;