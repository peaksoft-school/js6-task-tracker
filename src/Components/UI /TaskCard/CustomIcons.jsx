import React from "react"
import styled from "styled-components"

const CustomIcons = ({ alt, src }) => {
   return <StyledCustomIcon src={src} alt={alt} />
}

export default CustomIcons

const StyledCustomIcon = styled.img`
   width: 22px;
   height: 22px;
   position: ${(props) => props.alt === "EditIcon" && "absolute"};
   top: ${(props) => props.alt === "EditIcon" && "10px"};
   right: ${(props) => props.alt === "EditIcon" && "10px"};
   cursor: pointer;
`
