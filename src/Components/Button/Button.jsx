import React from "react";
import "./Button.css";

export const Button = (props) => {
  return <div className="primary-button">{props.text}</div>;
};
