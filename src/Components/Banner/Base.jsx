import React from "react";
import "./Banner.css";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";

export const Base = () => {
  return (
    <div className="banner-container">
      <div className="banner-text">Create and Share Your Stories</div>
      <div className="banner-btn-container">
        <NavLink to="/registration">
          <Button text="Sign Up" />
        </NavLink>
        <Button text="Sign In" />
      </div>
    </div>
  );
};
