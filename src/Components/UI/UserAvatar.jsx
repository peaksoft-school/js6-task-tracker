import React from "react"
import styled from "styled-components"

const UserAvatar = ({ userAvatar }) => {
   return <StyledAvatarUser src={userAvatar} />
}

export default UserAvatar

const StyledAvatarUser = styled.img`
   width: 50px;
   height: 50px;
   border-radius: 22px;
`
