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
  transition: all .4s;
  :hover {
    transform: scale(120%);
  }
`;

export const Triangle = styled.img`
  position: absolute;
  width: 70%;
  height: 70%;
  top: 15%;
  left: 15%;
  z-index: -1;
`;
