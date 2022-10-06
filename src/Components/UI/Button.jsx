import React from "react";
import styled from "styled-components";

const Btn = ({ title, onClick, color }) => {
  return (
    <Button onClick={onClick} color={color}>
      {title}
    </Button>
  );
};

export default Btn;

const Button = styled.button`
  background-color: ${(props) => (props.color ? props.color : "#0079BF")};
  border: none;
  font-size: 18px;
  padding: 0 50px;
  height: 42px;
  border-radius: 24px;
  color: #ffffff;
  font-family: "Nunito", sans-serif;
  &:hover {
    background-color: #005688;
  }
  &:active {
    background-color: #57aee0;
  }
`;
