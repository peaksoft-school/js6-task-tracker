import React from "react"
import styled from "styled-components"

const GrayButton = ({ archived, children, onClick, iconButton, fullWidth }) => {
   return (
      <StyledGrayButton
         archived={archived}
         fullWidth={fullWidth}
         icon={iconButton}
         onClick={onClick}
      >
         <Icon src={iconButton} /> {children}
      </StyledGrayButton>
   )
}

export default GrayButton

const StyledGrayButton = styled.button`
   width: ${(props) => props.fullWidth && props.fullWidth};
   display: flex;
   height: 4.5vh;
   align-items: center;
   justify-content: flex-start;
   background-color: ${(props) =>
      props.archived === true ? "#66C74B" : "#F4F5F7"};
   border-radius: 8px;
   font-family: "Nunito", sans-serif;
   font-size: 0.9rem;
   font-weight: 400;
   color: ${(props) => (props.archived ? "white" : "gray")};
   border: none;
`

const Icon = styled.img`
   margin: 0 0.7rem 0 0.7rem;
   width: 2.5vw;
   height: 2.5vh;
`
