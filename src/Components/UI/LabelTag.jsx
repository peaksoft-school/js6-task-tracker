import React from "react"
import styled from "styled-components"

function LableTag({ text, color }) {
   return (
      <Label backgroundColor={color} type="button">
         {text}asdfasdfasfasdfa
      </Label>
   )
}

export default LableTag
const Label = styled.label`
   width: 293px;
   background-color: ${(props) => props.backgroundColor};
   height: 32px;
   border-radius: 6px;
   padding: 6px 253px 6px 16px;
   color: #ffffff;
   line-height: 20px;
   font-size: 16px;
`
