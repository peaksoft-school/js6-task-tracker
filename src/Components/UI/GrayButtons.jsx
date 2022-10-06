import React from "react";
import styled from "styled-components";

const GrayButton = ({ children, onClick, iconButton, fullWidth }) => {
  return (
    <StyledGrayButton fullWidth={fullWidth} icon={iconButton} onClick={onClick}>
      <IconButton src={iconButton} /> {children}
    </StyledGrayButton>
  );
};

export default GrayButton;

const StyledGrayButton = styled.div`
  width: ${(props) => props.fullWidth && props.fullWidth};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #f4f5f7;
  border-radius: 8px;
  font-family: "Nunito", sans-serif;
  font-size: 19px;
`;
const IconButton = styled.img`
  margin: 0 17px;
  width: 25px;
  height: 25px;
`;
