import React from "react";
import "./Navbar.css";
import { Button } from "../Button/Button";
import { CiShoppingCart } from "react-icons/ci";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Button text="Sign In" />
      <Button text="Sign Up" />
      <div>
        <CiShoppingCart />
      </div>
    </div>
  );
};
