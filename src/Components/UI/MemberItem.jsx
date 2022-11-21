import styled from "styled-components"
import React from "react"
import GrayButton from "./GrayButtons"
import memberIcon from "../../assets/icons/MemberIcon.svg"
import UserAvatar from "./UserAvatar"

const MemberItem = ({ userGmail, photoUser, userName }) => {
   return (
      <>
         <GrayButton fullWidth="168px" iconButton={memberIcon}>
            Members
         </GrayButton>
         <StyledMemberItem>
            <UserAvatar userAvatar={photoUser} />

            <div>
               <p>{userName}Nazira</p>
               <span>{userGmail}nazira@gmail.com</span>
            </div>
         </StyledMemberItem>
      </>
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
