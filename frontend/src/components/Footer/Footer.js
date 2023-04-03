import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Footer.css";
export default function Footer() {
  const [showPreview, setShowPreview] = useState(false);
  const handlePreview = () => {
    setShowPreview(true);
  };
  return (
    <>
      <div className="preview">
        <button className="preview-btn-1" onClick={handlePreview}>
          Preview Details{" "}
        </button>
      </div>
      {showPreview && <Redirect to="/preview" />}
    </>
  );
}
