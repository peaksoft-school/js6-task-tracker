import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick, hover, color, active, fullWidth }) => {
  return (
    <StyledButton
      fullWidth={fullWidth}
      active={active}
      hover={hover}
      onClick={onClick}
      color={color}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  background-color: ${(props) => (props.color ? props.color : "#0079BF")};
  border: none;
  width: ${(props) => props.fullWidth && props.fullWidth};
  font-size: 18px;
  height: 42px;
  border-radius: 24px;
  color: #ffffff;
  font-family: "Nunito", sans-serif;
  &:hover {
    transition: 0.5s;
    background-color: ${(props) => (props.hover ? props.hover : "#005688")};
  }
  &:active {
    background-color: ${(props) => (props.active ? props.active : "#57AEE0")};
  }
`;
