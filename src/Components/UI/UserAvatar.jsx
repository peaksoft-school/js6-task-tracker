import React from "react"
import styled from "styled-components"

const UserAvatar = ({ src, click }) => {
   return <StyledAvatarUser onClick={click} src={src} />
}

export default UserAvatar

const StyledAvatarUser = styled.img`
   border-radius: 50%;
   width: 50px;
   height: 50px;
`
