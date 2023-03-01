import React, { useState, useEffect } from "react";

// STYLES
import {
  OptionsContainer,
  Triangle,
  PlayAgainButton,
  Status,
  GameContainer,
  PlayersContainer,
  Pick,
  StatusContainer,
} from "../styles/Options";
import Option from "./Option";

// REDUX
import { useDispatch } from "react-redux";
import { increment, decrement } from "@/features/score/score";

// MOTION
import { motion } from "framer-motion";

type Props = {};

const Options = (props: Props) => {
  const choices = ["paper", "scissors", "rock"];

  // PICKS
  const [userChoice, setUserChoice] = useState<string | undefined>(undefined);
  const [houseChoice, setHouseChoice] = useState<string | undefined>(undefined);
  const [gameStatus, setGameStatus] = useState<string | undefined>(undefined);

  // SCORE
  const dispatch = useDispatch();

  // RANDOM NUMBER TO GENERATE A RANDOM PICK FOR THE COMPUTER
  let randomNumber = Math.floor(Math.random() * choices.length);

  // SETTING PICKS
  const handleChoice = (choice: string) => {
    setUserChoice(choice);
    setHouseChoice(choices[randomNumber]);
  };

  

  // LOGIC!
  useEffect(() => {
    
    if (userChoice === houseChoice) {
      // draw
      setGameStatus("DRAW");
    } else if (
      (userChoice === "paper" && houseChoice === "rock") ||
      (userChoice === "rock" && houseChoice === "scissors") ||
      (userChoice === "scissors" && houseChoice === "paper")
    ) {
      //won
      setGameStatus(" YOU WIN");
      // UPDATE SCORE
      dispatch(increment());
    } else {
      //lose
      setGameStatus(" YOU LOSE");
      // UPDATE SCORE
      dispatch(decrement());
    }
  }, [houseChoice]);

  // RESET
  const gameReset = () => {
    setGameStatus(undefined);
    setHouseChoice(undefined);
    setUserChoice(undefined);
  };

  return (
    <OptionsContainer>
      {!userChoice &&
        choices.map((choice) => (
          <div>
            <Option choice={choice} key={choice} handleChoice={handleChoice} />
          </div>
        ))}
      {!userChoice && <Triangle src="./bg-triangle.svg" alt="" />}

      {userChoice && (
        <GameContainer>
          <PlayersContainer>
            <Pick>
              <Option choice={userChoice} />
              <p>YOU PICKED</p>
            </Pick>
            <Pick>
              <Option choice={houseChoice} />
              <p>THE HOUSE PICKED</p>
            </Pick>
          </PlayersContainer>

          <StatusContainer>
            <Status>{gameStatus}</Status>
            <PlayAgainButton onClick={gameReset}>Play Again</PlayAgainButton>
          </StatusContainer>
        </GameContainer>
      )}
    </OptionsContainer>
  );
};

export default Options;
