import React from "react"
import styled from "styled-components"

const UserGmail = ({ userGmail }) => {
   return <StyledUserGmail>{userGmail}nazira@gmail.com</StyledUserGmail>
}

export default UserGmail

const StyledUserGmail = styled.p`
   font-size: 19px;
   line-height: 20px;
   color: #919191;
`
