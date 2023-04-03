import React from "react";
import Tilt from "react-parallax-tilt";
import { uid } from "uid";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./AboutW.css";
const ServiceCard = ({ title }) => {
  return (
    <>
      {title && (
        <div className="master">
          <Tilt className="tilt-container">
            <div className="motion-div-card">
              <div
                options={{ max: 45, scale: 1, speed: 450 }}
                className="div-one"
              >
                <div className="container">
                  <div
                    className="circular-progress"
                    style={{ width: 150, height: 150 }}
                  >
                    <span className="progress-value">
                      <CircularProgressbar
                        className="h"
                        value={title.titleRating}
                        text={`${title.titleRating}`}
                      />
                    </span>
                  </div>
                  <h3 className="service-title text">{title.titleName}</h3>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      )}
    </>
  );
};
const AboutW = ({ title }) => {
  return (
    <>
      {title.length > 0 && (
        <div className="section-1">
          <div className="overview-1">
            <h1 className="qwerty">Overview.</h1>
          </div>
          <div className="service-mapper">
            {title.map((title1) => (
              <ServiceCard key={uid()} title={title1} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AboutW;
