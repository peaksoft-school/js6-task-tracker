import React from "react"
import styled from "styled-components"

const CloseButton = ({ onClick, src }) => {
   return <StyledCloseButton src={src} onClick={onClick} />
}

export default CloseButton

const StyledCloseButton = styled.img`
   position: absolute;
   top: 13px;
   right: 15px;
   width: 15px;
   height: 15px;
`
