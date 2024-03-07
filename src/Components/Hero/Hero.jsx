import React from "react";
import "./Hero.css";
import { Button } from "../Button/Button";

export const Hero = () => {
  return (
    <header className="hero-background">
      <div className="hero-container">
        <div className="hero-text">Create and Share Your Stories</div>
        <div className="hero-btn-container">
          <Button text="Sign Up" />
          <Button text="Sign In" />
        </div>
      </div>
    </header>
  );
};
