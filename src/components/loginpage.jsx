import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../App.css";

function LoginPage() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && loginData.email === storedUser.email && loginData.password === storedUser.password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/final");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Sign in to PopX</h2>
        <p>Access your account easily.</p>

        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />

        {error && <p className="error">{error}</p>}

        <button className="btn" onClick={handleLogin}>Login</button>
        <button className="btn secondary" onClick={() => navigate("/")}>Back</button>
      </div>
    </div>
  );
}

export default LoginPage;
