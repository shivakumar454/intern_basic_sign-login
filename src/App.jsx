import React from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./components/welcome";
import SignupPage from "./components/signuppage";
import LoginPage from "./components/loginpage";
import FinalPage from "./components/finalpage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/final" element={<FinalPage />} />
    </Routes>
  );
}

export default App;
