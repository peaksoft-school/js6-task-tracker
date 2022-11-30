import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../store/AuthSlice"
import TaskTracker from "../assets/svg/TaskTracker.svg"
import Input from "./UI/Input"
import searchIcon from "../assets/svg/SearchIcon.svg"
import UserAvatar from "./UI/UserAvatar"
import avatarPhoto from "../assets/svg/userAvatar.svg"
import Notification from "./Notification"
import Favorite from "./UI/FavouritesWallpaper"
import DropDown from "./UI/ReusableDropDown"
import Notifications from "../assets/svg/NotificationIcon.svg"
import { axiosInstance } from "../api/axiosInstance"
import { useActiveIndex } from "../utilits/hooks/useActiveIndex"
import Arrow from "./UI/Arrow"
import { getFavourites } from "../store/FavouritesSlice"

function Header() {
   const { favourites, workspaces } = useSelector((state) => state)

   const dispatch = useDispatch()
   const { getActiveIndexHandler, isActiveDropDown } = useActiveIndex()
   const [notification, setNotification] = useState([])

   const getNotificationHandler = async () => {
      try {
         const { data } = await axiosInstance.get("/api/notifications")
         return setNotification(data)
      } catch (error) {
         return console.log(error)
      }
   }

   useEffect(() => {
      dispatch(getFavourites())
   }, [workspaces])

   useEffect(() => {
      getNotificationHandler()
   }, [])

   return (
      <ParentDiv>
         <LeftBlock>
            <Logo src={TaskTracker} alt="" />
            <OpenMenu
               onClick={() =>
                  getActiveIndexHandler(isActiveDropDown !== "1" ? "1" : "0")
               }
            >
               Favourites <span>{favourites.favourites.length}</span>
               <Arrow rotate="270deg" />
            </OpenMenu>

            <DropDown
               top="7vh"
               left="20.5vw"
               showState={isActiveDropDown === "1"}
               width="380px"
               height="600px"
            >
               <Favorite favourites={favourites.favourites} />
            </DropDown>
         </LeftBlock>
         <RightBlock>
            <ContainerInput>
               <Input placeholder="Search" />
               <SearchIcon src={searchIcon} />
            </ContainerInput>

            <NotificationIconContainer
               onClick={() =>
                  getActiveIndexHandler(isActiveDropDown !== "2" ? "2" : "0")
               }
            >
               <img src={Notifications} alt="" />
               {notification.length > 0 && <span>{notification.length}</span>}
            </NotificationIconContainer>
            <DropDown
               showState={isActiveDropDown === "2"}
               width="390px"
               height="90vh"
               top="60px"
               right="80px"
            >
               <Notification notification={notification} />
            </DropDown>

            <UserAvatar
               src={avatarPhoto}
               click={() =>
                  getActiveIndexHandler(isActiveDropDown !== "3" ? "3" : "0")
               }
            />
            <DropDown
               width="150px"
               top="50px"
               right="80px"
               showState={isActiveDropDown === "3"}
            >
               <ProfileLogout>
                  <Link to="profile">
                     <p>Profile</p>
                  </Link>
                  <p onClick={() => dispatch(logout())}>Logout</p>
               </ProfileLogout>
            </DropDown>
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
   height: 78px;
   box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.3);
   background-color: white;
   position: sticky;
   top: 0;
   z-index: 200;
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
const NotificationIconContainer = styled.div`
   width: 37px;
   height: 27px;
   position: relative;
   cursor: pointer;
   span {
      background-color: #d91212;
      border-radius: 8px;
      font-size: 12px;
      color: white;
      padding: 0.8px 7px 0.8px;
      font-weight: 500;
      align-items: center;
      position: absolute;
      left: 12px;
      bottom: 15px;
   }
`
const OpenMenu = styled.div`
   position: relative;
   width: 102px;
   height: 20px;
   font-weight: 500;
   display: flex;
   align-items: center;
   gap: 5px;
   cursor: pointer;
   img {
      position: absolute;
      right: -15px;
   }
`
const ProfileLogout = styled.div`
   a {
      color: black;
      text-decoration: none;
   }
   p {
      margin: 10px 20px;
      cursor: pointer;
   }
`
