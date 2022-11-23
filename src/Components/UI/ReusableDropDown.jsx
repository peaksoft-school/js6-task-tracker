import React from "react"
import styled from "styled-components"

const ReusableDropDown = ({
   width,
   height,
   top,
   left,
   children,
   showState,
   right,
   padding,
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

const DropDownContainer = styled.div`
   background-color: white;
   padding: ${(props) => props.padding};
   position: absolute;
   border-radius: 20px;
   top: ${(props) => props.top};
   left: ${(props) => props.left};
   right: ${(props) => props.right};
   width: ${(props) => props.width};
   max-height: ${(props) => props.height};
   -webkit-box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
   -moz-box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
   box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
`
