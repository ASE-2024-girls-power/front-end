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
        <NavLink to="/signin">
          <Button text="Sign In" />
        </NavLink>
      </div>
    </div>
  );
};
