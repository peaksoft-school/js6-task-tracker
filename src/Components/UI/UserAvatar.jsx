import React from "react"
import styled from "styled-components"

const UserAvatar = ({ src }) => {
   return <StyledAvatarUser src={src} />
}

export default UserAvatar

const StyledAvatarUser = styled.img`
   width: 50px;
   height: 50px;
`
