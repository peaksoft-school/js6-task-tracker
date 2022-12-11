import React from "react"
import styled, { keyframes } from "styled-components"

const ReusableDropDown = ({
   width,
   height,
   top,
   left,
   padding,
   children,
   showState,
   right,
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
         >
            {children}
         </DropDownContainer>
      )
   )
}

export default ReusableDropDown

const animationDropDown = keyframes`
    from {
        margin-right: -300px;
    }
    to { 
        margin-right: 0;
    }
`
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
   animation: ${animationDropDown} 0.06s linear alternate;
`
