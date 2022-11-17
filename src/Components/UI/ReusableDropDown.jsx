import React from "react"
import styled from "styled-components"

const ReusableDropDown = ({
   width,
   height,
   top,
   left,
   padding,
   children,
   showState,
   borderRadius,
}) => {
   return (
      showState && (
         <DropDownContainer
            padding={padding}
            className="DropDown"
            borderRadius={borderRadius}
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
   position: absolute;
   padding: ${(props) => props.padding};
   z-index: 50;
   border-radius: ${(props) =>
      props.borderRadius ? props.borderRadius : "20px"};
   top: ${(props) => props.top};
   left: ${(props) => props.left};
   width: ${(props) => props.width};
   height: ${(props) => props.height};
   -webkit-box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
   -moz-box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
   box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
`
