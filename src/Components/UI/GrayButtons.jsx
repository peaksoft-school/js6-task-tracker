import React from "react"
import styled from "styled-components"

const GrayButton = ({
   archived,
   children,
   onClick,
   iconButton,
   fullWidth,
   padding,
}) => {
   return (
      <StyledGrayButton
         padding={padding}
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
   height: 35px;
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
   padding: ${(props) => props.padding};
`

const Icon = styled.img`
   margin: 0 0.7rem 0 0.7rem;
   width: 20px;
   height: 20px;
`
