import React from 'react';
import "../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Logout from "./auth/Logout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <>
     <React.Fragment />
            <nav>
                <Navbar />
            </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
            <footer>
                <Footer />
            </footer>
        <React.Fragment />
    </>
  );
}

export default Main;
