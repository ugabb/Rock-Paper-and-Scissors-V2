import styled from "styled-components";

export const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  margin: 0 auto;
  gap: 50px;
  margin-top: 50px;
  position: relative;
  z-index: 10;
`;

export const OptionIcon = styled.div`
  background-color: white;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 6px rgba(0, 0, 0, 0.15);
`;

export const Border = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  width: 140px;
  height: 140px;
  border-radius: 50%;
  box-shadow: inset 0 -6px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.4s;
`;

export const Triangle = styled.img`
  position: absolute;
  width: 70%;
  height: 70%;
  top: 15%;
  left: 15%;
  z-index: -1;
`;


export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 100px;
  align-items: center;
`
export const PlayersContainer = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;
`

export const Pick = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 20px;
`


export const PlayAgainButton = styled.button`
  background-color: white;
  color: hsl(229, 25%, 31%);
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  padding: 10px 4rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.4s;
  :hover {
    opacity: 50%;
    transform: scale(120%);
  }
`;


export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const Status = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;
`;
