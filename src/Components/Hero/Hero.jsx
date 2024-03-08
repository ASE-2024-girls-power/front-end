import React from "react";
import "./Hero.css";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";

export const Hero = () => {
  return (
    <header className="hero-background">
      <div className="hero-container">
        <div className="hero-text">Create and Share Your Stories</div>
        <div className="hero-btn-container">
        <NavLink to="/registration">
          <Button text="Sign Up" />
        </NavLink>
          <Button text="Sign In" />
        </div>
      </div>
    </header>
  );
};
