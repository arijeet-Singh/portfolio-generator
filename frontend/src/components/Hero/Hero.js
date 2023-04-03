import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Hero.css";
const Hero = () => {
  const { user } = useContext(AuthContext);
  // console.log("hero " + user._id);
  return (
    <div className="hero" id="hero">
      <div className="hero-heading">
        <h1 className="hero-bigger-heading">Customized Portfolio</h1>
      </div>
      <div className="typewriter">
        <h1 style={{ color: "#00cea8" }}>just for you!</h1>
      </div>
    </div>
  );
};

export default Hero;
