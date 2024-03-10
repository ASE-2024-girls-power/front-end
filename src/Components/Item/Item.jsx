import "./Item.css"
import React from "react";

export const Item = (props) => {
  return (
    <div className="story-container">
      <img src={props.img} alt="" />
      <p>{props.name}</p>
      <div className="story-info">
        <div className="author">{props.author}</div>
        <div className="price">{props.price}</div>
      </div>
    </div>
  );
};
