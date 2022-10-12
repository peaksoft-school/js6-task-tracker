import React from "react"
import styled from "styled-components"

const UserAvatar = ({ userAvatar }) => {
   return <StyledAvatarUser src={userAvatar} />
}

export default UserAvatar

const StyledAvatarUser = styled.img`
   width: 40px;
   height: 40px;
   border-radius: 22px;
`
