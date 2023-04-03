import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import "./Contact.css";
export default function Contact() {
  const { user } = useContext(AuthContext);
  // console.log("contact " + user._id);
  const [email, setEmail] = useState("");
  const [fullname, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSaveContact = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("No Email Provided");
    } else {
      const contactBody = {
        fullName: fullname,
        email: email,
        phone: phone,
      };
      try {
        await axios
          .put(
            `http://localhost:5000/api/user/details/contact/${user._id}`,
            contactBody
          )
          .then((res) => {
            if (res.status === 200) {
              alert("Saved");
            } else {
            }
          });
      } catch (error) {}
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-heading">
        <h1 className="contact-bigger-heading">
          How to reach <span style={{ color: "#00cea8" }}>you?</span>
        </h1>
      </div>
      <div className="form-contact">
        <form className="actual-form-contact">
          <input
            className="contact-form-input"
            type="text"
            value={fullname}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
            autoComplete="off"
          ></input>
          <input
            className="contact-form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email ID"
            required
            autoComplete="off"
          ></input>
          <input
            className="contact-form-input"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number (optional)"
            autoComplete="off"
          ></input>
          <button
            type="submit"
            className="contact-form-btn"
            onClick={handleSaveContact}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
