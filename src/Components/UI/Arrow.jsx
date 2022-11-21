import styled from "styled-components"
import React from "react"
import arrow from "../../assets/icons/arrowRight.svg"

const Arrow = ({ rotate }) => {
   return <StyledArrow rotate={rotate} src={arrow} />
}

export default Arrow

const StyledArrow = styled.img`
   transform: ${(props) => `rotate(${props.rotate})`};
`
