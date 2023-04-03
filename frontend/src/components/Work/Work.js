import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import "./Work.css";
const Work = () => {
  const { user } = useContext(AuthContext);
  // console.log("work " + user._id);
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [projectName, setProjectName] = useState("");
  const handleAddWork = (e) => {
    e.preventDefault();
    setLink("");
    setDescription("");
    setProjectName("");
  };
  const handleSaveWork = async (e) => {
    e.preventDefault();
    if (!link && !description) {
      alert("Nothing to Save!");
    } else if (!link) {
      alert("Repo Link Field Empty");
    } else if (!description) {
      alert("Description Field Empty");
    } else {
      const workBody = {
        projectName: projectName,
        link: link,
        description: description,
      };
      try {
        await axios
          .put(
            `http://localhost:5000/api/user/details/work/${user._id}`,
            workBody
          )
          .then((res) => {
            if (res.status === 200) {
              alert("Saved");
            }
            else{
            
            }
          });
      } catch (error) {}
    }
  };
  return (
    <div className="work" id="work">
      <div className="work-heading">
        <h1 className="work-bigger-heading">
          Showcase your{" "}
          <span style={{ color: "#00cea8" }}>Professionalism.</span>
        </h1>
        <h3>
          Attach your work samples.{" "}
          <span style={{ color: "#00cea8" }}>Briefly describe them.</span>
        </h3>
      </div>
      <div className="form-work">
        <form className="actual-form-work">
          <input
            className="work-form-input"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Name of project"
            required
            autoComplete="off"
          ></input>
          <input
            className="work-form-input"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Github Repo/Website Link"
            required
            autoComplete="off"
          ></input>
          <textarea
            rows={5}
            className="work-textarea"
            maxLength="180"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description of the project"
          ></textarea>
          <div className="work-btns">
            <button
              type="submit"
              className="work-form-btn"
              onClick={handleAddWork}
            >
              Add another
            </button>
            <button
              type="submit"
              className="work-form-btn"
              onClick={handleSaveWork}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Work;
