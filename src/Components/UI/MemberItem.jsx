import styled from "styled-components"
import React from "react"
import UserAvatar from "./UserAvatar"

const MemberItem = ({ email, image, firstname, lastName, onClick }) => {
   return (
      <StyledMemberItem onClick={onClick}>
         <UserAvatar src={image} />
         <div>
            <p>
               {firstname} {lastName}
            </p>
            <span>{email}</span>
         </div>
      </StyledMemberItem>
   )
}

export default MemberItem

const StyledMemberItem = styled.div`
   display: flex;
   align-items: center;
   width: 280px;
   height: 60px;
   cursor: pointer;
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
