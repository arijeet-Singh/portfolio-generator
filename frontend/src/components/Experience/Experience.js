import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import "./Experience.css";
const Experience = () => {
  const { user } = useContext(AuthContext);
  // console.log("experience " + user._id);
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [joining, setJoining] = useState("");
  const [leaving, setLeaving] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  const handleSaveExperience = async (e) => {
    e.preventDefault();
    const experienceBody = {
      jobTitle: jobTitle,
      company: company,
      joining: joining,
      leaving: leaving,
      responsibilities: responsibilities,
    };
    if (!jobTitle) {
      alert("Job Title Field Empty!");
    } else if (!company) {
      alert("Company Name Field Empty!");
    } else if (!joining) {
      alert("Joining Date Field Empty!");
    } else if (!leaving) {
      alert("Leaving Date Field Empty!");
    } else if (!responsibilities) {
      alert("Responisibilities Field Empty!");
    } else {
      try {
        await axios
          .put(
            `http://localhost:5000/api/user/details/experience/${user._id}`,
            experienceBody
          )
          .then((res) => {
            if (res.status == 200) {
              alert("Saved");
            }
            else{
            
            }
          });
      } catch (e) {}
    }
  };
  const handleAddExperience = (e) => {
    e.preventDefault();
    setJobTitle("");
    setCompany("");
    setJoining("");
    setLeaving("");
    setResponsibilities("");
  };
  return (
    <div className="experience" id="experience">
      <div className="experience-heading">
        <h1 className="experience-bigger-heading">
          Tell us about your past.
          <span style={{ color: "#00cea8" }}>
            <br />
            Work related, ofc.
          </span>
        </h1>
        <h3 className="h3">
          Where you are working right now, or have worked in the past, and the
          experience you gained from working there.
        </h3>
      </div>
      <div className="form-experience">
        <form className="actual-form-experience">
          <input
            className="experience-form-input"
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Job Title"
            required
            autoComplete="off"
          ></input>
          <input
            className="experience-form-input"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company Name"
            required
            autoComplete="off"
          ></input>
          <input
            className="experience-form-input"
            type="text"
            value={joining}
            onChange={(e) => setJoining(e.target.value)}
            placeholder="Joining Month and Year"
            required
            autoComplete="off"
          ></input>
          <input
            className="experience-form-input"
            type="text"
            value={leaving}
            onChange={(e) => setLeaving(e.target.value)}
            placeholder="Leaving Month and Year"
            required
            autoComplete="off"
          ></input>
          <textarea
            rows={5}
            className="experience-textarea"
            maxLength="190"
            placeholder="Responsibilities"
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
          ></textarea>
          <div className="experience-btns">
            <button
              type="submit"
              className="experience-form-btn"
              onClick={handleAddExperience}
            >
              Add Experience
            </button>
            <button
              type="submit"
              className="experience-form-btn"
              onClick={handleSaveExperience}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Experience;
