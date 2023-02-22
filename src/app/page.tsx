"use client";

import { useState } from "react";
import { Main, RulesButton,Rules,X } from "../styles/styles";
import Header from "@/components/Header";
import Options from "@/components/Options";

export default function Home() {
  const [rules, setRules] = useState<boolean>(false);

  const handleToggle = () => {
    setRules(!rules)
  }
  return (
    <Main>
      <Header />
      <Options />
      <RulesButton onClick={handleToggle}>Rules</RulesButton>
      {rules && (
        <Rules>
          <h1>Rules</h1>
          <img src="./image-rules.svg" alt="" />
          <X src="icon-close.svg" alt="" onClick={handleToggle}/>
        </Rules>
      )}
    </Main>
  );
}
