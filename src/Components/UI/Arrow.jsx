import styled from "styled-components"
import React from "react"
import arrow from "../../assets/icons/arrowRight.svg"

const Arrow = ({ rotate, onClick, margin }) => {
   return (
      <StyledArrow
         margin={margin}
         onClick={onClick}
         rotate={rotate}
         src={arrow}
      />
   )
}

export default Arrow

const StyledArrow = styled.img`
   cursor: pointer;
   width: 22px;
   height: 22px;
   margin: ${(props) => props.margin};
   transform: ${(props) => `rotate(${props.rotate})`};
`
