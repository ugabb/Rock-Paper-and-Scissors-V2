import { OptionIcon, Border } from "../styles/Options";

interface Option {
  choice: string;
}

const Option = ({ choice }: Option) => {

  const options = {
    paper: {choice, icon: "./icon-paper.svg", color: " hsl(230, 89%, 62%)" },
    rock: {choice, icon: "./icon-rock.svg", color: "hsl(349, 71%, 52%)" },
    scissors: {choice, icon: "./icon-scissors.svg", color: "hsl(39, 89%, 49%)" },
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
    <Border color={color}>
      <OptionIcon>
        <img src={icon} alt="" />
      </OptionIcon>
    </Border>
  );
};

export default Option;
