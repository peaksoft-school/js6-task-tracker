import React from "react"
import styled from "styled-components"

const CustomIcons = ({ alt, src }) => {
   return <CustomIconSize src={src} alt={alt} />
}

export default CustomIcons

const CustomIconSize = styled.img`
   width: 25px;
   height: 25px;
   position: ${(props) => props.alt === "EditIcon" && "absolute"};
   top: ${(props) => props.alt === "EditIcon" && "10px"};
   right: ${(props) => props.alt === "EditIcon" && "10px"};
`
