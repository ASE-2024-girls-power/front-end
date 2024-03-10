import React from "react";
import "./Group.css"
import { Item } from "../../Components/Item/Item";
import fakeData from "../../Assets/fakeData/fakeData";

export const Group = () => {
  return (
    <div className="stories">
      <h1>READ TRENDING STORIES NOW</h1>
      <hr />
      <div className="stories-grid">
        {fakeData.map((item) => {
          return (
            <Item
              key={item.id}
              name={item.name}
              author={item.author}
              img={item.img}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};
