/* eslint-disable react/destructuring-assignment */
import React from "react"
import styled from "styled-components"

const DisplayFlexJCSB = ({ children }) => {
   return <DisplayFlexJustifyContentSB>{children}</DisplayFlexJustifyContentSB>
}

export default DisplayFlexJCSB

const DisplayFlexJustifyContentSB = styled.div`
   display: flex;
   justify-content: space-between;
`
