import React from "react";
import Tilt from "react-parallax-tilt";
import { uid } from "uid";
import git from "./githublogo.png";
import www from "./www.png";
import "./WorkW.css";
const ProjectCard = ({ project }) => {
  return (
    <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="work-tilt">
      <div className="pro-1">
        {project.link.includes("github") && (
          <div className="img-con">
            <img
              src={git}
              alt="jhbsd"
              className="pro-img"
              onClick={() => window.open(project.link, "_blank")}
              style={{ cursor: "pointer" }}
            />
          </div>
        )}
        {!project.link.includes("github") && (
          <div className="img-con">
            <img
              src={www}
              alt="jhbsd"
              className="pro-img"
              onClick={() => window.open(project.link, "_blank")}
              style={{ cursor: "pointer" }}
            />
          </div>
        )}
      </div>
      <div className="pro-details">
        <h3 className="pro-name">{project.projectName}</h3>
        <p className="pro-description">{project.description}</p>
      </div>
    </Tilt>
  );
};

const Works = ({ work }) => {
  return (
    <>
      {work.length > 0 && (
        <div className="work-con">
          <div className="overview-1">
            <h1 className="qwerty">Projects.</h1>
          </div>
          <div className="pro">
            <div className="projects-map">
              {work.map((project) => (
                <ProjectCard key={uid()} project={project} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Works;
