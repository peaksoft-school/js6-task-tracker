import React from "react"
import styled from "styled-components"

const UserName = ({ userName }) => {
   return <StyledUserName> {userName} Nazira </StyledUserName>
}

export default UserName

const StyledUserName = styled.h3`
   font-weight: 400;
   display: inline;
   color: black;
`
