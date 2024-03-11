import React from "react";
import { Hero } from "../Components/Hero/Hero";
import { Base } from "../Components/Banner/Base";
import { Stories } from "./Stories";

export const Home = () => {
  return (
    <>
      <Hero>
        <Base />
      </Hero>
      <Stories />
    </>
  );
};
