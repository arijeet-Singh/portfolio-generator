import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "./ContactW.css";
export default function ContactW({ email, phone }) {
  return (
    <div className="contact-con">
      <div className="haha">
        <div className="overview-1">
          <h1 className="qwerty">Contact.</h1>
        </div>
        <div className="details-con">
          <a href={`mailto:${email}`}>
            <h2 className="em">
              {email}
              <EmailIcon sx={{ marginLeft: "10px", marginBottom: "-5px" }} />
            </h2>
          </a>
          <h2 className="ph">
            {phone}
            <LocalPhoneIcon sx={{ marginLeft: "10px", marginBottom: "-3px" }} />
          </h2>
        </div>
      </div>
    </div>
  );
}
