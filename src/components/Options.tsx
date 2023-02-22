import React from "react";

import { OptionsContainer, Triangle } from "../styles/Options";
import Option from "./Option";

type Props = {};

const Options = (props: Props) => {
  const handleClick = () => {
    console.log("choice");
  };

  const choices = ["paper", "rock", "scissors"];

  return (
    <OptionsContainer>
      {choices.map((choice) => (
        <Option choice={choice} key={choice}/>
      ))}
      <Triangle src="./bg-triangle.svg" alt="" />
    </OptionsContainer>
  );
};

export default Options;
