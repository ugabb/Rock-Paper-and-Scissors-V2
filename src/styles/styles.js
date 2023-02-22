import styled from "styled-components";

export const Main = styled.div`
  background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 5px solid hsl(217, 16%, 45%);
  border-radius: 5px;
  padding: 10px;
  color: hsl(229, 25%, 31%);

  @media (min-width: 728px){
    width: 60%;
    margin: 0 auto;
  }
`;

export const ScoreContainer = styled.div`
  background-color: white;
  width: 100px;
  height: 100px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Score = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

export const Logo = styled.img`
    height: 60px;
`

export const RulesButton = styled.button`
  background-color: transparent;
  color: white;
  border: 3px solid white;
  border-radius: 5px;
  text-transform: uppercase;
  padding: 5px 3rem;
  font-size: 1.5rem;
  margin: 200px auto;
  cursor: pointer;
  transition: all .4s;
    :hover{
      opacity: 50%;
      transform: scale(120%);
  }
`;

export const Rules = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-transform: uppercase;
  color: hsl(229, 25%, 31%);
  transition: all .4s;
  z-index: 100;
`
export const X = styled.img`
height: 2rem;
cursor: pointer;
transition: all .4s;
  :hover{
    transform:rotate(180deg);
  }
`