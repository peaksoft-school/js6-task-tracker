import React from "react"
import styled from "styled-components"

const IconButton = ({ iconSvg, background, width, height }) => {
   return (
      <BackgroundBlock background={background}>
         <StyledIcon
            width={width}
            height={height}
            src={iconSvg}
            background={background}
         />
      </BackgroundBlock>
   )
}

export default IconButton

const StyledIcon = styled.img`
   width: ${(props) => (props.width ? props.width : "16px")};
   height: ${(props) => (props.height ? props.height : "16px")};
`

const BackgroundBlock = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 34px;
   height: 34px;
   border-radius: 50%;
   background-color: ${(props) => props.background && "#E9E9E9"};
`
