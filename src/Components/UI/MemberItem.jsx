import styled from "styled-components"
import React from "react"

import UserAvatar from "./UserAvatar"

const MemberItem = ({ userGmail, photoUser, userName }) => {
   return (
      <StyledMemberItem>
         <UserAvatar userAvatar={photoUser} />
         <div>
            <p>{userName}Nazira</p>
            <span>{userGmail}nazira@gmail.com</span>
         </div>
      </StyledMemberItem>
   )
}

export default MemberItem

const StyledMemberItem = styled.div`
   display: flex;
   align-items: center;
   width: 310px;
   height: 60px;
   div {
      height: 40px;
      margin-left: 20px;
      font-weight: 600;
      font-size: 16px;
      p {
         margin: 0;
      }
      span {
         color: gray;
      }
   }
`
