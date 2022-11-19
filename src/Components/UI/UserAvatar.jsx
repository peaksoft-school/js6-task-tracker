import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const UserAvatar = ({ src }) => {
   return (
      <Link to="/profile">
         <StyledAvatarUser src={src} />
      </Link>
   )
}

export default UserAvatar

const StyledAvatarUser = styled.img`
   width: 50px;
   height: 50px;
`
