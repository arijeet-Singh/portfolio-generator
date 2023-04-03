import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import "./Testimonials.css";
export default function Testimonials() {
  const { user } = useContext(AuthContext);
  // console.log("testimonials " + user._id);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [organization, setOrganization] = useState("");
  const [feedback, setFeedback] = useState("");
  const handleAddFeedback = (e) => {
    e.preventDefault();
    setName("");
    setDesignation("");
    setOrganization("");
    setFeedback("");
  };
  const handleSaveFeedback = async (e) => {
    e.preventDefault();

    if (!name) {
      alert("Name Field Empty");
    } else if (!designation) {
      alert("Designation Field Empty");
    } else if (!organization) {
      alert("Company Field Empty");
    } else if (!feedback) {
      alert("Feedback Field Empty");
    } else {
      const feedbackBody = {
        name: name,
        designation: designation,
        organization: organization,
        feedback: feedback,
      };
      await axios
        .put(
          `http://localhost:5000/api/user/details/testimonials/${user._id}`,
          feedbackBody
        )
        .then((res) => {
          if (res.status === 200) {
            alert("Saved");
          }
          // console.log(res);
        });
    }
  };
  return (
    <div className="testimonial" id="testimonials">
      <div className="testimonial-heading">
        <h1 className="testimonial-bigger-heading">
          What do others say about your{" "}
          <span style={{ color: "#00cea8" }}>work?</span>
        </h1>
        <h3>
          Provide their Feedback, Name, Designation, and Company/Organization
        </h3>
      </div>
      <div className="form-testimonial">
        <form className="actual-form-testimonial">
          <input
            className="testimonial-form-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            autoComplete="off"
          ></input>
          <input
            className="testimonial-form-input"
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            placeholder="Designation"
            required
            autoComplete="off"
          ></input>
          <input
            className="testimonial-form-input"
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="Company/Organization"
            required
            autoComplete="off"
          ></input>
          <textarea
            rows={5}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="work-textarea"
            maxLength="190"
            placeholder="Feedback"
          ></textarea>
          <div className="testimonial-btns">
            <button
              type="submit"
              className="testimonial-form-btn"
              onClick={handleAddFeedback}
            >
              Add another
            </button>
            <button
              type="submit"
              className="testimonial-form-btn"
              onClick={handleSaveFeedback}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
