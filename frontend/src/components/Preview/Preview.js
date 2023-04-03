import React from "react";
import { useContext, useState, useEffect } from "react";
import { uid } from "uid";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./Preview.css";
import axios from "axios";
export default function Preview() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState();
  const history = useHistory();
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await axios
      .get(`http://localhost:5000/api/user/preview/${user._id}`)
      .then((res) => {
        setData(res.data);
      });
  }
  const handleGeneratePortfolio = () => {
    getData();
    history.push(`/website/${user._id}`);
  };
  const handleGoBack = () => {
    history.push("/portfolio");
  };
  const handleDeleteExperience = async (card) => {
    await axios
      .put(
        `http://localhost:5000/api/user/delete/experience/${user._id}/${card.company}`
      )
      .then((res) => {
        getData();
        // console.log(res);
      });
  };
  const handleDeleteSkill = async (skill) => {
    await axios
      .put(`http://localhost:5000/api/user/delete/skill/${user._id}/${skill}`)
      .then((res) => {
        getData();
        // console.log(res);
      });
  };
  const handleDeleteTitle = async (title) => {
    // console.log(title);
    await axios
      .put(
        `http://localhost:5000/api/user/delete/title/${user._id}/${title.titleName}`
      )
      .then((res) => {
        getData();
        // console.log(res);
      });
  };
  const handleDeleteWork = async (work) => {
    await axios
      .put(
        `http://localhost:5000/api/user/delete/work/${user._id}/${work.projectName}`
      )
      .then((res) => {
        getData();
        // console.log(res);
      });
  };
  const handleDeleteTestimonial = async (testimonial) => {
    // console.log(testimonial);
    await axios
      .put(
        `http://localhost:5000/api/user/delete/testimonials/${user._id}/${testimonial.name}`
      )
      .then((res) => {
        getData();
        // console.log(res);
      });
  };
  return (
    <div className="container">
      <div className="about-you-1">
        <h1 className="m">
          Preview of your data.
          <br /> Delete data in this window, go back to add.
        </h1>
      </div>
      {user && data && (
        <>
          <div className="preview">
            <h1 className="about-you-2">About You</h1>
            <div className="about-div">
              <div className="about-data">{data.about[0]}</div>
            </div>
            <div className="about-title">
              <h1 className="about-you">Your titles</h1>
              <div className="x">
                {data.title.length >= 1 &&
                  data.title.map((title) => (
                    <div key={uid()} className="title-list list-1">
                      <li className="title-li">{title.titleName}</li>
                      <div key={uid()} className="skill-list-1 list-2">
                        <li onClick={() => handleDeleteTitle(title)}>
                          <DeleteIcon
                            sx={{ color: "white", cursor: "pointer" }}
                          />
                        </li>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="skill-div">
              <h1 className="about-you">Your Skills</h1>
              <div className="x">
                {data.skill.length >= 1 &&
                  data.skill.map((skill) => (
                    <div className="skill-list list-1" key={uid()}>
                      <li>{skill}</li>
                      <div className="skill-list-1 list-2" key={uid()}>
                        <li onClick={() => handleDeleteSkill(skill)}>
                          <DeleteIcon
                            sx={{ color: "white", cursor: "pointer" }}
                          />
                        </li>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="experience-div">
              <h1 className="about-you">Experience</h1>
              <div className="x">
                {data.experience.length >= 1 &&
                  data.experience.map((experience) => (
                    <div key={uid()} className="experience-list">
                      <div className="exp-div">
                        <li onClick={() => handleDeleteExperience(experience)}>
                          <DeleteIcon
                            sx={{ color: "white", cursor: "pointer" }}
                          />
                        </li>
                        <li>{experience.company}</li>
                        <hr />
                        <li>{experience.jobTitle}</li>
                        <hr />
                        <li>{experience.joining}</li>
                        <hr />
                        <li>{experience.leaving}</li>
                        <hr />
                        <li style={{ width: "300px", textAlign: "left" }}>
                          {experience.responsibilities}
                        </li>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="work-div">
              <h1 className="about-you">Work Samples</h1>
              <div className="x">
                {data.work.length >= 1 &&
                  data.work.map((work) => (
                    <div key={uid()} className="work-list">
                      <div className="exp-div">
                        <li onClick={() => handleDeleteWork(work)}>
                          <DeleteIcon
                            sx={{ color: "white", cursor: "pointer" }}
                          />
                        </li>
                        <li>{work.projectName}</li>
                        <hr />
                        <a href={work.link} target="_blank">
                          {work.link}
                        </a>
                        <hr />
                        <li
                          style={{
                            width: "250px",
                            textAlign: "left",
                            wordWrap: "break-word",
                          }}
                        >
                          {work.description}
                        </li>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="testimonials-div">
              <h1 className="about-you">Testimonials</h1>
              <div className="x">
                {data.testimonials.length >= 1 &&
                  data.testimonials.map((testimonial) => (
                    <div key={uid()} className="testimonial-list">
                      <div className="exp-div">
                        <li
                          onClick={() => handleDeleteTestimonial(testimonial)}
                        >
                          <DeleteIcon
                            sx={{ color: "white", cursor: "pointer" }}
                          />
                        </li>
                        <li>{testimonial.name}</li>
                        <hr />
                        <li>{testimonial.designation}</li>
                        <hr />
                        <li>{testimonial.organization}</li>
                        <hr />
                        <li style={{ width: "250px", textAlign: "left" }}>
                          {testimonial.feedback}
                        </li>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="contact-div">
              <h1 className="about-you">Contact</h1>
              {data.contact.length >= 1 && (
                <div className="skill-list-2">
                  <li key={uid()}>{data.contact[0].fullName}</li>
                  <li key={uid()}>{data.contact[0].email}</li>
                  <li key={uid()}>{data.contact[0].phone}</li>
                </div>
              )}
            </div>
          </div>
          <button
            className="preview-btn"
            style={{ color: "black" }}
            onClick={handleGoBack}
          >
            Go Back to Add Details
          </button>
          <br />
          <button
            className="preview-btn"
            style={{ color: "black" }}
            onClick={handleGeneratePortfolio}
          >
            Generate Portfolio
          </button>
        </>
      )}
    </div>
  );
}
