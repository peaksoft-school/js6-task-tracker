import React from "react"
import styled from "styled-components"
import closeSvg from "../../assets/icons/close.svg"

const CloseButton = ({ onClick, top, left, right }) => {
   return (
      <StyledCloseButton
         top={top}
         left={left}
         right={right}
         src={closeSvg}
         onClick={onClick}
      />
   )
}

export default CloseButton

const StyledCloseButton = styled.img`
   position: absolute;
   cursor: pointer;
   top: ${(props) => (props.top ? props.top : "15px")};
   right: ${(props) => (props.right ? props.right : "15px")};
   left: ${(props) => props.left};
   width: 15px;
   height: 15px;
`
