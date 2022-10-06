import React from "react";
import styled from "styled-components";

const GrayButton = ({ archived, children, onClick, iconButton, fullWidth }) => {
  return (
    <StyledGrayButton
      archived={archived}
      fullWidth={fullWidth}
      icon={iconButton}
      onClick={onClick}
    >
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
  background-color: ${(props) =>
    props.archived === true ? "#66C74B" : "#F4F5F7"};
  border-radius: 8px;
  font-family: "Nunito", sans-serif;
  font-size: 19px;
  color: ${(props) => props.archived && "white"};
`;

const IconButton = styled.img`
  margin: 0 17px;
  width: 25px;
  height: 25px;
`;
