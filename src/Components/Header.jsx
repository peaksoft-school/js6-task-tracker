/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../store/AuthSlice"
import TaskTracker from "../assets/svg/TaskTracker.svg"
import Input from "./UI/Input"
import searchIcon from "../assets/svg/SearchIcon.svg"
import Notification from "./Notification"
import Favorite from "./UI/FavouritesWallpaper"
import DropDown from "./UI/ReusableDropDown"
import Notifications from "../assets/svg/NotificationIcon.svg"
import { axiosInstance } from "../api/axiosInstance"
import { useToggle } from "../utilits/hooks/useToggle"
import Arrow from "./UI/Arrow"
import { getFavourites } from "../store/FavouritesSlice"
import DisplayFlex from "../layout/DisplayFlex"
import { clearWorkspaces } from "../store/workspacesSlice"
import initialAvatar from "../assets/images/initialAvatar.jpeg"
import UserAvatar from "./UI/UserAvatar"

function Header({ profileData, getNotificationHandler, notification }) {
   const { favourites, workspaces } = useSelector((state) => state)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { isActive, setActive } = useToggle()
   const [searchResponse, setSearchResponse] = useState([])
   const { pathname } = useLocation()

   const markAsReadNotificaiton = async () => {
      try {
         const { data } = await axiosInstance.put(`/api/notifications`)
         getNotificationHandler()
         return setActive("nothing")
      } catch (error) {
         return console.log(error.message)
      }
   }

   // ЗАПРОСЫ НА ПОИСКОВИК

   const searchGlobalHandler = async (e) => {
      try {
         setActive("searchDropDown")
         const { data } = await axiosInstance.get(
            `/api/public/global-search/${workspaces.workspaceById.id}?email=${e.target.value}`
         )
         return setSearchResponse(data)
      } catch (error) {
         return console.log(error.message)
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
         <DisplayFlex JK="space-between" width="33vw" height="68px" AI="center">
            <Logo
               onClick={() => navigate("/allWorkspaces")}
               src={TaskTracker}
               alt=""
            />
            <OpenMenu
               onClick={() =>
                  setActive(
                     isActive !== "favourites" ? "favourites" : "nothing"
                  )
               }
            >
               Favourites
               <span>
                  <span>(</span>
                  <span>{favourites.favourites.length}</span>
                  <span>)</span>
               </span>
               <Arrow rotate="270deg" />
            </OpenMenu>

            <DropDown
               top="7vh"
               left="20.5vw"
               showState={isActive === "favourites"}
               width="380px"
               height="600px"
            >
               <Favorite favourites={favourites.favourites} />
            </DropDown>
         </DisplayFlex>
         <DisplayFlex
            width="48vw"
            JK="flex-end"
            heigth="7vh"
            AI="center"
            margin="0 2.5rem 0 0"
            gap="10px"
         >
            {pathname !== "/allWorkspaces" ? (
               <ContainerInput>
                  <Input
                     onBlur={() => setActive("nothing")}
                     onChange={(e) => searchGlobalHandler(e)}
                     placeholder="Search"
                  />
                  <SearchIcon src={searchIcon} />
               </ContainerInput>
            ) : null}
            <DropDown
               showState={isActive === "searchDropDown"}
               width="510px"
               right="11.5%"
               top="79%"
            >
               <ResponsesSearchBlock>
                  {searchResponse.length > 0 ? (
                     searchResponse.map((item) => {
                        return (
                           <li key={item.id}>
                              <UserAvatar src={item.image} />
                              <span>{item.firstName}</span>
                              <span>{item.lastName}</span>
                           </li>
                        )
                     })
                  ) : (
                     <p>Nothing found</p>
                  )}
               </ResponsesSearchBlock>
            </DropDown>

            <NotificationIconContainer
               onClick={() =>
                  setActive(
                     isActive !== "notification" ? "notification" : "nothing"
                  )
               }
            >
               <img src={Notifications} alt="" />
               {notification.length > 0 && <span>{notification.length}</span>}
            </NotificationIconContainer>
            <DropDown
               showState={isActive === "notification"}
               width="380px"
               height="90vh"
               top="60px"
               right="80px"
               padding="10px 10px 0 10px"
            >
               <Notification
                  markAsReadNotificaiton={markAsReadNotificaiton}
                  notification={notification}
               />
            </DropDown>

            <UserAvatar
               src={profileData.image || initialAvatar}
               click={() =>
                  setActive(isActive !== "profile" ? "profile" : "nothing")
               }
            />
            <DropDown
               width="150px"
               top="50px"
               right="80px"
               showState={isActive === "profile"}
            >
               <ProfileLogout>
                  <Link to="profile">
                     <p>Profile</p>
                  </Link>
                  <p
                     onClick={() =>
                        dispatch(logout({ dispatch, clearWorkspaces }))
                     }
                  >
                     Logout
                  </p>
               </ProfileLogout>
            </DropDown>
         </DisplayFlex>
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
   position: fixed;
   top: 0;
   z-index: 200;
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
   cursor: pointer;
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
   span {
      span {
         &:nth-child(2) {
            margin: 0 2px 0 2px;
         }
      }
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
const ResponsesSearchBlock = styled.ul`
   padding: 5px 0 5px 40px;
   li {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.2rem;
      margin: 8px 0;
   }
   p {
      text-align: center;
      font-size: 1.2rem;
      margin: 15px 35px 15px 0;
   }
`
