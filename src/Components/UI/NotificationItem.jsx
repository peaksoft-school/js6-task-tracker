import React, { useEffect } from "react"
import styled from "styled-components"
import png from "../../assets/images/Rectangle.png"
import UserAvatar from "./UserAvatar"
import { getNotificationQuery } from "../../api/auth"

const NotificationItem = ({
   titleBoard,
   nameColumn,
   userAvatar,
   userName,
   notificationText,
   dateAdded,
   click,
}) => {
   const getNotification = async () => {
      try {
         const response = getNotificationQuery()
         return console.log(response)
      } catch (error) {
         return console.log(error)
      }
   }

   useEffect(() => {
      getNotification()
   }, [])

   return (
      <ContainerNotificationItem>
         <NotificationBoard backgroundImage={png}>
            <BlueIcon />

            <TitleBoard>{titleBoard}</TitleBoard>
            <p>{nameColumn}</p>
         </NotificationBoard>
         <StyledNotificationItem>
            <div>
               <UserAvatar src={userAvatar} />
               <StyledUserName>Nazira Nazirova {userName}</StyledUserName>
            </div>

            <NotificationText>
               {notificationText}Moved to list Done
            </NotificationText>
            <DateAdded>{dateAdded} Sep 15 at 13:23 PM</DateAdded>
            <StyledArrowIcon onClick={click} />
         </StyledNotificationItem>
      </ContainerNotificationItem>
   )
}

export default NotificationItem

const ContainerNotificationItem = styled.div`
   height: 300px;
`
const StyledNotificationItem = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-evenly;
   width: 320px;
   height: 120px;
   margin-bottom: 15px;
   border-bottom: 1px solid #e3e3e3;
   font-family: "Nunito", sans-serif;
   div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
   }
`
const NotificationBoard = styled.div`
   background-image: url(${(props) => props.backgroundImage});
   background-color: ${(props) => !props.backgroundImage && "gray"};
   background-repeat: no-repeat;
   background-size: cover;
   width: 300px;
   height: 120px;
   border-radius: 18px;
   font-family: "Nunito", sans-serif;
   padding: 2px 10px 5px 20px;
   text-align: left;
   color: white;
   p {
      font-size: 20px;
      margin-top: 0;
   }
`
const TitleBoard = styled.h3`
   margin-bottom: 0;
`
const NotificationText = styled.span`
   font-weight: 500;
   font-size: 1.1rem;
   color: #111111;
`
const DateAdded = styled.p`
   color: #919191;
   font-size: 17px;
   margin: 0;
`
const StyledArrowIcon = styled.img`
   position: absolute;
   width: 25px;
   height: 25px;
   right: 10px;
   top: 50px;
`
const BlueIcon = styled.span`
   width: 9px;
   height: 9px;
   background: #0079bf;
   border-radius: 50%;
`
const StyledUserName = styled.h3`
   font-weight: 400;
   display: inline;
   margin-left: 10px;
`
