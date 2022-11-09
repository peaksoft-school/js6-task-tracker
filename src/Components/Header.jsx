import React from "react"
import styled from "styled-components"
import TaskTracker from "../assets/svg/TaskTracker.svg"
import Input from "./UI/Input"
import searchIcon from "../assets/svg/SearchIcon.svg"
import NotificationIcon from "../assets/svg/NotificationIcon.svg"
import UserAvatar from "./UI/UserAvatar"
import avatarPhoto from "../assets/svg/userAvatar.svg"

function Header({ notificationQuantity }) {
   return (
      <ParentDiv>
         <div>
            <Logo src={TaskTracker} alt="" />
         </div>

         <RightBlock>
            <ContainerInput>
               <Input placeholder="Search" />
               <SearchIcon src={searchIcon} />
            </ContainerInput>

            <NotificationIconContainer>
               <img src={NotificationIcon} alt="" />
               <span>{notificationQuantity}15</span>
            </NotificationIconContainer>
            <UserAvatar src={avatarPhoto} />
         </RightBlock>
      </ParentDiv>
   )
}

export default Header

const ParentDiv = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100vw;
   height: 68px;
   box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.3);
   background-color: white;
`
const RightBlock = styled.div`
   width: 38vw;
   display: flex;
   justify-content: space-between;
   height: 20vh;
   align-items: center;
   margin-right: 2.5rem;
`
const ContainerInput = styled.div`
   position: relative;
   width: 30vw;
   Input {
      padding-left: 40px;
   }
`
const SearchIcon = styled.img`
   position: absolute;
   top: 12px;
   left: 19px;
`
const Logo = styled.img`
   padding: 1rem 2.1rem 1rem;
`
const NotificationIconContainer = styled.div`
   width: 2vw;
   height: 4vh;
   margin: 2rem;
   cursor: pointer;
   position: relative;
   img {
      margin-top: 0.7rem;
   }
   span {
      position: absolute;
      font-size: 1rem;
      top: 0;
      right: 1px;
      padding: 0 4px 0 4px;
      border-radius: 12px;
      width: 20px;
      background-color: #d91212;
      color: white;
   }
`
