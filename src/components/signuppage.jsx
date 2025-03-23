import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [redirect, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.email || !formData.password) {
      alert("Please fill in all required fields.");
      return;
    }

    // Store the whole user object in localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    setShowPopup(true);
    setRedirect(true);
  };

  return (
    <div className="signup-container">
      <h2>Create your PopX account</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Full Name*</label>
          <input type="text" name="fullName" placeholder="Enter full name" onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Phone Number*</label>
          <input type="text" name="phone" placeholder="Enter phone number" onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Email Address*</label>
          <input type="email" name="email" placeholder="Enter email address" onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Password*</label>
          <input type="password" name="password" placeholder="Enter password" onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Company Name</label>
          <input type="text" name="companyName" placeholder="Enter company name" onChange={handleChange} />
        </div>
        <div className="radio-group">
          <label>Are you an Agency?*</label>
          <div>
            <input type="radio" name="isAgency" value="yes" onChange={handleChange} />
            <label> Yes </label>
            <input type="radio" name="isAgency" value="no" onChange={handleChange} />
            <label> No </label>
          </div>
        </div>
        <button type="submit" className="create-account-btn">Create Account</button>
      </form>

      {showPopup && (
        <div className="popup">
          <p>Account created successfully!</p>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
