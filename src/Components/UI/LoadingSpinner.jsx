import React from "react"
import styled, { keyframes } from "styled-components"
import loadingSpinner from "../../assets/icons/spinner.svg"

const LoadingSpinner = ({ left, top }) => {
   return <StyledSpinner left={left} top={top} src={loadingSpinner} />
}

export default LoadingSpinner

const rotate = keyframes`
    to{
        transform: rotate(360deg)
    }
`

const StyledSpinner = styled.img`
   width: 50px;
   height: 50px;
   animation: ${rotate} 0.7s linear infinite;
   position: absolute;
   top: ${(props) => props.top};
   left: ${(props) => props.left};
`
