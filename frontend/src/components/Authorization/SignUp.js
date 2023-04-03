import React, { useState } from "react";
import { useHistory } from "react-router";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import "./SignUp.css";
export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();

    let emailFlag, passwordFlag;

    let pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (pattern.test(email) && email.includes("@gmail.com")) {
      emailFlag = 1;
    } else {
      alert("Invalid Email ID");
      setEmail("");
    }

    // PASSWORD VALIDATION
    if (password.length < 6 || password.length > 10) {
      alert("Password must be between 6-10 characters.");
    } else {
      passwordFlag = 1;
    }
    if (emailFlag && passwordFlag) {
      const registerBody = {
        email: email,
        password: password,
      };
      try {
        const res = await axios.post(
          "http://localhost:5000/api/auth/register",
          registerBody
        );
        if (res.status == 200) {
          setEmail("");
          setPassword("");
          history.push("/login");
        }
      } catch (e) {}
    }
  };
  const handleAlready = () => {
    history.push("/login");
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <h1 className="main-heading">
        Portfolio/<span style={{ color: "#00cea8" }}>Gen</span>
      </h1>
      <div className="form-signup">
        <form className="actual-form-signup">
          <input
            type="email"
            required
            autoComplete="off"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-form-input"
          ></input>
          {!showPassword ? (
            <>
              <input
                type="password"
                required
                autoComplete="off"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="signup-form-input"
              ></input>
              <VisibilityIcon
                className="visible"
                onClick={handleShowPassword}
                style={{ cursor: "pointer", color: "white" }}
              />
            </>
          ) : (
            <>
              <input
                type="text"
                required
                autoComplete="off"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="signup-form-input"
              ></input>
              <VisibilityOffIcon
                className="not-visible"
                onClick={handleShowPassword}
                style={{ cursor: "pointer", color: "white" }}
              />
            </>
          )}

          <button
            type="submit"
            className="signup-form-btn"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <p className="already" onClick={handleAlready}>
            Already have an account? Log In
          </p>
        </form>
      </div>
    </div>
  );
}
