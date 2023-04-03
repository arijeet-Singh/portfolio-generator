import React from "react";
import "./HeroW.css";
const HeroW = ({ fullName, about }) => {
  // console.log(user);
  return (
    <div className="hero-section">
      <div className="hero-div">
        <h1 className="hero-heading">
          <div className="hds">
            Hi, I'm <span className="user-name">{fullName.split(" ")[0]}</span>
          </div>
        </h1>
        <div className="hero-p">
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroW;
// user.contact[0].fullName
// user.about[0]
