import { OptionIcon, Border } from "../styles/Options";

// MOTION
import { motion } from "framer-motion";

interface Option {
  choice: string | undefined;
  handleChoice?: Function;
}

const Option = ({ choice, handleChoice }: Option) => {
  const options = {
    paper: { choice, icon: "./icon-paper.svg", color: " hsl(230, 89%, 62%)" },
    rock: { choice, icon: "./icon-rock.svg", color: "hsl(349, 71%, 52%)" },
    scissors: {
      choice,
      icon: "./icon-scissors.svg",
      color: "hsl(39, 89%, 49%)",
    },
  };

  let icon: string = "./icon-paper.svg";
  let color: string = "./icon-paper.svg";

  switch (choice) {
    case "paper":
      icon = options.paper.icon;
      color = options.paper.color;
      break;
    case "rock":
      icon = options.rock.icon;
      color = options.rock.color;
      break;
    case "scissors":
      icon = options.scissors.icon;
      color = options.scissors.color;
      break;
    default:
      break;
  }

  return (
    <Border
      as={motion.div}
      whileHover={{scale:1.2}}
      color={color}
      onClick={() => {
        if (handleChoice) handleChoice(choice);
      }}
    >
      <OptionIcon>
        <img src={icon} alt="" />
      </OptionIcon>
    </Border>
  );
};

export default Option;
