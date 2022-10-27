import React from "react"
import styled from "styled-components"

const CustomIcons = ({ position, src, top, right, edit, click }) => {
   return (
      <StyledCustomIcon
         onClick={click}
         src={src}
         position={position}
         top={top}
         right={right}
         edit={edit}
      />
   )
}

export default CustomIcons

const StyledCustomIcon = styled.img`
   display: ${(props) => props.edit && "none"};
   width: 22px;
   height: 22px;
   position: ${(props) => props.position === "absolute" && "absolute"};
   top: ${(props) => props.top};
   right: ${(props) => props.right};
   cursor: pointer;
`
