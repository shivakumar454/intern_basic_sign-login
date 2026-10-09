import React from "react";
import { useNavigate } from "react-router-dom";
import "./../App.css";

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="welcome-box">
        <h2>Welcome to PopX</h2>
        <p>Join us and start your journey today.</p>
        <button className="btn" onClick={() => navigate("/signup")}>
          Create Account
        </button>
        <button className="btn secondary" onClick={() => navigate("/login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;

const ciTest = "hello";