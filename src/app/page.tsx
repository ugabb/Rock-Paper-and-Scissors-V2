"use client";

import { useState } from "react";
// STYLES
import { Main, RulesButton, Rules, X } from "../styles/styles";

// COMPONENTS
import Header from "@/components/Header";
import Options from "@/components/Options";

// MOTION
import { motion } from "framer-motion";

export default function Home() {
  const [rules, setRules] = useState<boolean>(false);

  const handleToggle = () => {
    setRules(!rules);
  };

  return (
    <Main>
      <Header />
      <Options />
      <RulesButton onClick={handleToggle}>Rules</RulesButton>
      {rules && (
        <Rules
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1>Rules</h1>
          <img src="./image-rules.svg" alt="" />
          <X src="icon-close.svg" alt="" onClick={handleToggle} />
        </Rules>
      )}
    </Main>
  );
}
