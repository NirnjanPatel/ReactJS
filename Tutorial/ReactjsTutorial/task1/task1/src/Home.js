import React from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
    const Navigate = useNavigate();
    return (
        <>
        <Navbar />
        <br/>
        <h1>Home Page</h1>
        </>
    );
};

export default HomePage;
