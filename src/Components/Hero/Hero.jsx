import React from "react";
import "./Hero.css";

export const Hero = ({ children }) => {
  return <header className="hero-background">{children}</header>;
};
