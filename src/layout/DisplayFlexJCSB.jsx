/* eslint-disable react/destructuring-assignment */
import React from "react"
import styled from "styled-components"

const DisplayFlexJCSB = ({ children, width, heigth }) => {
   return (
      <DisplayFlexJustifyContentSB heigth={heigth} width={width}>
         {children}
      </DisplayFlexJustifyContentSB>
   )
}

export default DisplayFlexJCSB

const DisplayFlexJustifyContentSB = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: ${(props) => props.width};
   height: ${(props) => props.heigth};
`
