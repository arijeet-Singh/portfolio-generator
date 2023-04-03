import React, { useState, useContext } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./LogIn.css";
export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleNoAccount = () => {
    history.push("/");
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);

    let emailFlag, passwordFlag;
    // EMAIL VALIDATION
    let pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!pattern.test(email)) {
      alert("Invalid Email ID");
      setEmail("");
    } else {
      emailFlag = 1;
    }
    //PASSWORD VALIDATION
    if (password.length < 6 || password.length > 10) {
      alert("Password must be between 6-10 characters.");
      setPassword("")
    } else {
      passwordFlag = 1;
    }
    if (emailFlag && passwordFlag) {
      loginCall({ email: email, password: password }, dispatch);
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div>
      <h1 className="main-heading">
        Portfolio/<span style={{ color: "#00cea8" }}>Gen</span>
      </h1>
      <div className="form-login">
        <form className="actual-form-login">
          <input
            type="email"
            required
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email ID"
            className="login-form-input"
          ></input>
          {!showPassword ? (
            <>
              <input
                type="password"
                required
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="login-form-input"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="login-form-input"
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
            className="login-form-btn"
            onClick={handleLogIn}
          >
            Log In
          </button>
          <p className="already" onClick={handleNoAccount}>
            Don't have an account? Sign Up
          </p>
        </form>
      </div>
    </div>
  );
}
