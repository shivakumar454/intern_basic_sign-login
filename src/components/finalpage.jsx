import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const FinalPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!storedUser || isLoggedIn !== "true") {
      navigate("/login");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");  
    navigate("/login");
  };

  return (
    <div className="container1">
      <h2>Account Settings</h2>
      <img 
        src="https://img.freepik.com/free-photo/asian-girl-pressing-digital-screen-futuristic-technology_53876-119718.jpg"
        alt="User"
        className="profile-image"
      />
      <h3>{user?.fullName || "User"}</h3>
      <p>{user?.email}</p>
      <button className="btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default FinalPage;
