import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import "./Skills.css";
const Skills = () => {
  const { user } = useContext(AuthContext);
  // console.log("skill " + user._id);
  const [skill, setSkill] = useState("");
  const handleAddSkill = (e) => {
    e.preventDefault();
    setSkill("");
  };
  const handleSaveSkill = async (e) => {
    e.preventDefault();
    // console.log(skill);
    if (skill.length) {
      const skillBody = {
        skill: skill,
      };
      await axios
        .put(
          `http://localhost:5000/api/user/details/skill/${user._id}`,
          skillBody
        )
        .then((res) => {
          if (res.status == 200) {
            alert("Saved");
          }
          else{
            
          }
        });
    } else {
      alert("Skill Field Empty");
    }
  };
  return (
    <div className="skills" id="skills">
      <div className="skills-heading">
        <h1 className="skills-bigger-heading">
          So, what do you <span style={{ color: "#00cea8" }}>know?</span>
        </h1>
        <h3>List your skills.</h3>
      </div>
      <div className="form-skills">
        <form className="actual-form-skills">
          <input
            className="skills-form-input"
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            placeholder="Skill"
            required
            autoComplete="off"
          ></input>
          <div className="skills-btns">
            <button
              type="submit"
              className="skills-form-btn"
              onClick={handleAddSkill}
            >
              Add more skills
            </button>
            <button
              type="submit"
              className="skills-form-btn"
              onClick={handleSaveSkill}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Skills;
