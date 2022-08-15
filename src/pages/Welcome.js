import React from "react";
import "./Welcome.css";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Pick & Eat</h1>
      <button class="cta button" onClick={() => navigate("/main")}>
        <span>Get started!</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    </>
  );
}

export default Welcome;
