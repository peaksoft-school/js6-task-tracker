import styled from "styled-components"
import React from "react"
import GrayButton from "./GrayButtons"
import memberIcon from "../../assets/icons/MemberIcon.svg"
import UserAvatar from "./UserAvatar"
import UserName from "./UserName"
import UserGmail from "./UserGmail"

const MemberItem = ({ userGmail, photoUser, userName }) => {
   return (
      <>
         <GrayButton fullWidth="168px" iconButton={memberIcon}>
            Members
         </GrayButton>
         <StyledMemberItem>
            <UserAvatar userAvatar={photoUser} />
            <div>
               <UserName userName={userName} />
               <UserGmail userGmail={userGmail} />
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
   p,
   h3 {
      margin: 0 0 0 20px;
   }
`
