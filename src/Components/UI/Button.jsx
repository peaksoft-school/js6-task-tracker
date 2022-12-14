import React from "react"
import styled from "styled-components"

const Button = ({
   children,
   onClick,
   hover,
   color,
   active,
   fullWidth,
   disabled,
   fullHeight,
   type,
   textColor,
   padding,
}) => {
   return (
      <StyledButton
         textColor={textColor}
         type={type}
         width={fullWidth}
         fullHeight={fullHeight}
         active={active}
         hover={hover}
         onClick={onClick}
         color={color}
         disabled={disabled}
         padding={padding}
      >
         {children}
      </StyledButton>
   )
}

export default Button

const StyledButton = styled.button`
   background-color: ${(props) => (props.color ? props.color : "#0079BF")};
   border: none;
   padding: ${(props) => (props.padding ? props.padding : "0 23px 0 23px")};
   font-weight: 300;
   width: ${(props) => props.width && props.width};
   height: ${(props) => props.fullHeight && props.fullHeight};
   font-size: 18px;
   border-radius: 24px;
   color: ${(props) => (props.textColor ? props.textColor : "white")};
   font-family: "Nunito", sans-serif;
   &:hover {
      transition: 0.5s;
      background-color: ${(props) => (props.hover ? props.hover : "#005688")};
   }
   &:active {
      background-color: ${(props) => (props.active ? props.active : "#57AEE0")};
   }
   &:disabled {
      background-color: ${(props) => props.disabled && "gray"};
      cursor: ${(props) => props.disabled && "not-allowed"};
   }
`
