/* eslint-disable react/destructuring-assignment */
import React from "react"
import styled from "styled-components"

// КРАТКОЕ ДОКУМЕНТАЦИЯ
// КАСТОМНЫЙ КОНТАЙНЕР БОЛУП БЕРЕТ.

// JK = justify kontent
// AI = align items
// FW = flex-wrap
// FD = flex-direction

const DisplayFlex = ({
   children,
   width,
   heigth,
   JK,
   AI,
   FD,
   FW,
   gap,
   border,
   margin,
   padding,
}) => {
   return (
      <StyledDisplayFlex
         AI={AI}
         JK={JK}
         FD={FD}
         FW={FW}
         heigth={heigth}
         width={width}
         gap={gap}
         border={border}
         margin={margin}
         padding={padding}
      >
         {children}
      </StyledDisplayFlex>
   )
}
export default DisplayFlex

const StyledDisplayFlex = styled.div`
   display: flex;
   height: ${(props) => props.heigth};
   justify-content: ${(props) => props.JK};
   flex-direction: ${(props) => props.FD};
   flex-wrap: ${(props) => props.FW};
   align-items: ${(props) => props.AI};
   width: ${(props) => props.width};
   gap: ${(props) => props.gap};
   border: ${(props) => props.border};
   margin: ${(props) => props.margin};
   padding: ${(props) => props.padding};
`
