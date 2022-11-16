import React from "react"
import styled from "styled-components"
import TaskTracker from "../assets/svg/TaskTracker.svg"
import Input from "./UI/Input"
import searchIcon from "../assets/svg/SearchIcon.svg"
import UserAvatar from "./UI/UserAvatar"
import avatarPhoto from "../assets/svg/userAvatar.svg"
import Notification from "./Notification"
import Favorite from "./UI/FavouritesWallpaper"
import { listBoard } from "../utilits/constants/Constants"

function Header() {
   return (
      <ParentDiv>
         <LeftBlock>
            <Logo src={TaskTracker} alt="" />
            <Favorite listBoard={listBoard} />
         </LeftBlock>
         <RightBlock>
            <ContainerInput>
               <Input placeholder="Search" />
               <SearchIcon src={searchIcon} />
            </ContainerInput>
            <Notification quantityNotification={5} />

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
const LeftBlock = styled.div`
   justify-content: space-between;
   width: 33vw;
   display: flex;
   heigth: 68px;
   align-items: center;
`

const RightBlock = styled.div`
   width: 48vw;
   display: flex;
   justify-content: space-between;
   height: 10vh;
   align-items: center;
   margin-right: 2.5rem;
`
const ContainerInput = styled.div`
   position: relative;
   width: 40vw;
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
