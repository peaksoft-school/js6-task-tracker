import React from "react"
import styled from "styled-components"

const TextForEmpty = ({ children, top, left }) => {
   return (
      <StyledText top={top} left={left}>
         {children}
      </StyledText>
   )
}

export default TextForEmpty

const StyledText = styled.p`
   position: absolute;
   text-align: center;
   top: ${(props) => props.top};
   left: ${(props) => props.left};
   font-size: 1.4rem;
   z-index: 300;
`
