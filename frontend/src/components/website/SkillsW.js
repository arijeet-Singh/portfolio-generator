import React from "react";
import Tilt from "react-parallax-tilt";
import { uid } from "uid";
import "./SkillsW.css";
const SkillsW = ({ skills }) => {
  return (
    <>
      {skills.length > 0 && (
        <div className="skill-con">
          <div className="headings-skill">
            <div className="overview-1">
              <h1 className="qwerty">Skills.</h1>
            </div>
          </div>
          <div className="tech-container">
            {skills.map((skill) => (
              <Tilt
                className="tilt-container-1"
                key={uid()}
                options={{ max: 45, scale: 1, speed: 450 }}
              >
                <div className="motion-div-card-1">
                  <h1 className="tech-1">{skill}</h1>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SkillsW;
