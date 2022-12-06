/* eslint-disable react/destructuring-assignment */
import React from "react"
import styled from "styled-components"

const DisplayFlexJCSB = ({
   children,
   width,
   heigth,
   flexStart,
   alignItems,
}) => {
   return (
      <DisplayFlexJustifyContentSB
         alignItems={alignItems}
         flexStart={flexStart}
         heigth={heigth}
         width={width}
      >
         {children}
      </DisplayFlexJustifyContentSB>
   )
}

export default DisplayFlexJCSB

const DisplayFlexJustifyContentSB = styled.div`
   display: flex;
   justify-content: ${(props) =>
      props.flexStart === "flex-start" ? "flex-start" : "space-between"};
   align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
   width: ${(props) => props.width};
   height: ${(props) => props.heigth};
   gap: ${(props) => props.flexStart === "flex-start" && "20px"};
`
