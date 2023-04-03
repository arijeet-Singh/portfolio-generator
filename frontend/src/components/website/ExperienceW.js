import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { uid } from "uid";
import "react-vertical-timeline-component/style.min.css";
import "./ExperienceW.css";
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="element"
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      date={experience.joining + "-" + experience.leaving}
    >
      <div className="container-exp">
        <h3 className="exp-title">{experience.jobTitle}</h3>
        <p className="exp-company">{experience.company}</p>
      </div>
      <ul className="exp-list">
        <li key={uid()} className="list-item">
          {experience.responsibilities}
        </li>
      </ul>
    </VerticalTimelineElement>
  );
};

const ExperienceW = ({ exp }) => {
  return (
    <>
      {exp.length> 0 && (
        <div className="idk">
          <div className="overview-1">
            <h1 className="qwerty">Experience.</h1>
          </div>
          <div className="exp-map">
            <VerticalTimeline>
              {exp.map((experience) => (
                <ExperienceCard key={uid()} experience={experience} />
              ))}
            </VerticalTimeline>
          </div>
        </div>
      )}
    </>
  );
};

export default ExperienceW;
