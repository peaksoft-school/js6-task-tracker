import React from "react"
import styled from "styled-components"
import photoAvatar from "../../assets/images/avatarPhotoo.jpg"

const UserAvatar = () => {
   return <StyledAvatarUser src={photoAvatar} />
}

export default UserAvatar

const StyledAvatarUser = styled.img`
   width: 50px;
   height: 50px;
`
