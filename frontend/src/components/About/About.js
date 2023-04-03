import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import "./About.css";
const About = () => {
  const { user } = useContext(AuthContext);
  // console.log("about " + user._id);
  const [textAreaAbout, setTextAreaAbout] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [rating, setRating] = useState("");
  const handleSaveAbout = async (e) => {
    e.preventDefault();
    // console.log(textAreaAbout);

    if (textAreaAbout.length) {
      const aboutBody = {
        about: textAreaAbout,
      };
      try {
        await axios
          .put(
            `http://localhost:5000/api/user/details/about/${user._id}`,
            aboutBody
          )
          .then((res) => {
            if (res.status == 200) {
              alert("Saved");
            }
          });
      } catch (e) {}
    } else {
      alert("About field empty!");
    }
  };
  const handleSaveTitle = async (e) => {
    e.preventDefault();
    if (inputTitle.length) {
      const titleBody = {
        titleName: inputTitle,
        titleRating: rating,
      };
      try {
        await axios
          .put(
            `http://localhost:5000/api/user/details/title/${user._id}`,
            titleBody
          )
          .then((res) => {
            if (res.status == 200) {
              alert("Saved");
            }
          });
      } catch (e) {}
    } else {
      alert("Skill Field Empty!");
    }
  };
  const handleAddTitle = (e) => {
    e.preventDefault();
    setInputTitle("");
    setRating("");
  };
  return (
    <div className="about" id="about">
      <div className="about-heading">
        <h1 className="bigger-heading">
          Alright, tell us about{" "}
          <span style={{ color: "#00cea8" }}>yourself.</span>{" "}
        </h1>
        <h3>
          Briefly describe your line of work,
          <span style={{ color: "#00cea8" }}> what you love doing.</span>{" "}
        </h3>
      </div>
      <div className="form-about">
        <form className="actual-form-about">
          <textarea
            rows={5}
            value={textAreaAbout}
            onChange={(e) => setTextAreaAbout(e.target.value)}
            className="about-textarea"
            maxLength="190"
            placeholder="Something like this- I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.JS, and Three.JS."
          ></textarea>
          <button
            type="submit"
            className="about-form-btn"
            onClick={handleSaveAbout}
          >
            Save
          </button>
        </form>
      </div>
      <div className="about-heading">
        <h1 className="bigger-heading">
          To summarize,
          <span style={{ color: "#00cea8" }}> you are?</span>
        </h1>
        <h3>
          Web Dev, Mobile Dev,
          <span style={{ color: "#00cea8" }}>
            {" "}
            or both? Provide title profiles.
          </span>
        </h3>
      </div>
      <div className="form-about-summary">
        <form className="actual-form-about">
          <input
            className="about-form-input"
            type="text"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            placeholder="Title (Web Developer, etc.)"
            required
            autoComplete="off"
          ></input>
          <input
            className="about-form-input"
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="Rate yourself"
            required
            autoComplete="off"
          ></input>
          <div className="about-btns">
            <button
              type="submit"
              className="about-form-btn"
              onClick={handleAddTitle}
            >
              Add another
            </button>
            <button
              type="submit"
              className="about-form-btn"
              onClick={handleSaveTitle}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default About;
