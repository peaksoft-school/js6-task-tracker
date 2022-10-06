import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick, color, activeColor }) => {
  return (
    <StyledButton onClick={onClick} color={color}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  background-color: ${(props) => (props.color ? props.color : "#0079BF")};
  border: none;
  font-size: 18px;
  padding: 0 50px;
  height: 42px;
  border-radius: 24px;
  color: #ffffff;
  font-family: "Nunito", sans-serif;
  &:hover {
    background-color: ${(props) =>
      props.hoverColor ? props.hoverColor : "#005688"};
  }
  &:active {
    background-color: ${(props) =>
      props.activeColor ? props.activeColor : "#57AEE0"};
  }
`;
