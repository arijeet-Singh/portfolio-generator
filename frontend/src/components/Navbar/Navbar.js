import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  // console.log("navbar " + user._id);
  return (
    <div className="Navbar">
      <div className="logo">
        <h1 className="logo-heading" style={{ cursor: "pointer" }}>
          Portfolio/<span style={{ color: "#00cea8" }}>Gen</span>
        </h1>
      </div>
      <ul className="sections">
        <a href="#about">
          <li className="section-li">About</li>
        </a>
        <a href="#experience">
          <li className="section-li">Experience</li>
        </a>
        <a href="#skills">
          <li className="section-li">Skills</li>
        </a>
        <a href="#work">
          <li className="section-li">Work</li>
        </a>
        <a href="#testimonials">
          <li className="section-li">Feedback</li>
        </a>
        <a href="#contact">
          <li className="section-li">Contact</li>
        </a>
        <a href="/">
          <li className="section-li">Log Out</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
