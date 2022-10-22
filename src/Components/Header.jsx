import React from "react"
import { InputAdornment } from "@mui/material"
import styled from "styled-components"
import TaskTracker from "../assets/svg/TaskTracker.svg"
import arrow from "../assets/svg/arrow.svg"
import Input from "./UI/Input"
import { ReactComponent as SearchIcon } from "../assets/svg/SearchIcon.svg"
import NotificationIcon from "../assets/svg/NotificationIcon.svg"
import Avatar from "./UI/Avatar"

function Header({ items, Notifications }) {
   return (
      <ParentDiv>
         <div>
            <Logo src={TaskTracker} alt="" />
         </div>
         <div>
            <Ptext>
               Favourites ({items}) <img src={arrow} alt="" />
            </Ptext>
         </div>
         <ContainerInput>
            <Input
               placeholder="Search"
               InputProps={{
                  startAdornment: (
                     <InputAdornment position="start">
                        <SearchIcon />
                     </InputAdornment>
                  ),
               }}
            />
         </ContainerInput>
         <NotificationIconContainer>
            <img src={NotificationIcon} alt="" />
            <span>{Notifications}</span>
         </NotificationIconContainer>
         <ContainerAvatar>
            <Avatar />
         </ContainerAvatar>
      </ParentDiv>
   )
}

export default Header
const ParentDiv = styled.div`
   position: relative;
   display: flex;
   height: 68px;
   align-items: center;
   width: 1540px;
   margin-top: -7px;
   box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.3);
   margin-left: -8px;
`
const Logo = styled.img`
   width: 163px;
   height: 36px;
   padding: 16px 40px 16px;
`
const Ptext = styled.p`
   width: 124px;
   height: 25px;
   font-size: 16px;
   color: #3e3e3e;
   font-weight: 500;
   padding: 10px 79px 10px;
`
const ContainerInput = styled.div`
   position: absolute;
   right: 153px;
   padding: 3px 13px;
   Input {
      width: 444px;
      height: 5px;
   }
`
const NotificationIconContainer = styled.div`
   position: absolute;
   width: 37px;
   height: 27px;
   left: 1410px;
   top: 23px;
   cursor: pointer;
   span {
      background-color: #d91212;
      border-radius: 8px;
      font-size: 12px;
      color: white;
      padding: 0px 5px 0px;
      font-weight: 500;
      align-items: center;
      position: absolute;
      left: 12px;
      bottom: 15px;
   }
`
const ContainerAvatar = styled.div`
   position: absolute;
   left: 1450px;
   top: 13px;
   img {
      width: 32px;
      height: 32px;
   }
`
