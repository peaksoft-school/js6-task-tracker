import React from "react"
import styled from "styled-components"

const IconButton = ({ iconSvg, width, height, onClick }) => {
   return (
      <StyledIcon
         onClick={onClick}
         width={width}
         height={height}
         src={iconSvg}
      />
   )
}

export default IconButton

const StyledIcon = styled.img`
   width: ${(props) => (props.width ? props.width : "16px")};
   height: ${(props) => (props.height ? props.height : "16px")};
   cursor: pointer;
`
