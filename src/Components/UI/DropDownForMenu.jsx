import React from "react"
import styled, { keyframes } from "styled-components"
import { fadeInRightBig } from "react-animations"

const DropDownForMenu = ({
   width,
   height,
   top,
   left,
   padding,
   children,
   showState,
   right,
   animation,
}) => {
   return (
      showState && (
         <DropDownContainer
            padding={padding}
            right={right}
            top={top}
            left={left}
            width={width}
            height={height}
            animaiton={animation}
         >
            {children}
         </DropDownContainer>
      )
   )
}

export default DropDownForMenu

const bounceAnimation = keyframes`${fadeInRightBig}`

const DropDownContainer = styled.div`
   background-color: white;
   padding: ${(props) => props.padding};
   position: absolute;
   padding: ${(props) => props.padding};
   z-index: 50;
   border-radius: ${(props) =>
      props.borderRadius ? props.borderRadius : "20px"};
   top: ${(props) => props.top};
   left: ${(props) => props.left};
   right: ${(props) => props.right};
   width: ${(props) => props.width};
   max-height: ${(props) => props.height};
   -webkit-box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
   -moz-box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
   box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
   animation: 0.3s ${bounceAnimation} !important;
`
