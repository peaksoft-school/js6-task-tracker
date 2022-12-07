import React from "react"
import styled from "styled-components"
import closeSvg from "../../assets/icons/close.svg"

const CloseButton = ({ onClick }) => {
   return <StyledCloseButton src={closeSvg} onClick={onClick} />
}

export default CloseButton

const StyledCloseButton = styled.img`
   position: absolute;
   cursor: pointer;
   top: 13px;
   right: 15px;
   width: 15px;
   height: 15px;
`
