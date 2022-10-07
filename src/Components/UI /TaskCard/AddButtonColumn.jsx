import React from "react"
import styled from "styled-components"

const AddButtonColumn = () => {
   return <StyledAddButtonColumn>+ Add a column</StyledAddButtonColumn>
}

export default AddButtonColumn

const StyledAddButtonColumn = styled.button`
   border: none;
   width: 280px;
   height: 44px;
   background: rgba(145, 145, 145, 0.11);
   border-radius: 8px;
   font-family: "Nunito", sans-serif;
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 20px;
   color: #111111;
`
