import React from "react"
import styled from "styled-components"
import UserAvatar from "./UI/UserAvatar"
import DateAdded from "./UI/DateAdded"

function Notification({ notification, markAsReadNotificaiton }) {
   return (
      <NotificationContainer>
         <TitleBlock>
            <h3>Notification</h3>
            <span onClick={markAsReadNotificaiton}>Mark as read</span>
         </TitleBlock>
         <NotificationScroll>
            {notification?.map((item) => {
               return (
                  <>
                     <NotificationBoard key={item.id}>
                        <BlueIcon />
                        <img src={item.background} alt="boardPhoto" />
                        <h3>{item.boardTitle}</h3>
                        <p>{item.nameOfColumn}</p>
                     </NotificationBoard>
                     <StyledNotificationItem>
                        <div>
                           <UserAvatar src={item.image} />
                           <StyledUserName>
                              <span> {item.firstName}</span>
                              <span> {item.lastName}</span>
                           </StyledUserName>
                        </div>
                        <NotificationText>{item.message}</NotificationText>
                        <DateAdded date={item.createdAt} />
                     </StyledNotificationItem>
                  </>
               )
            })}
         </NotificationScroll>
      </NotificationContainer>
   )
}

export default Notification

const NotificationContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 350px;
   max-height: 80vh;
   align-items: center;
   ::-webkit-scrollbar {
      width: 20px;
   }
   ::-webkit-scrollbar-thumb {
      border-radius: 16px;
      background-color: #d9d9d9;
      border: 6px solid white;
   }
`
const NotificationScroll = styled.div`
   overflow: scroll;
`
const TitleBlock = styled.div`
   display: flex;
   justify-content: flex-end;
   height: 45px;
   align-items: center;
   width: 350px;

   h3 {
      font-weight: 500;
   }
   span {
      text-decoration: underline;
      margin: 0 0 0 15px;
      color: gray;
      cursor: pointer;
   }
`
const StyledNotificationItem = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-evenly;
   width: 330px;
   border-bottom: 1px solid #e3e3e3;
   font-family: "Nunito", sans-serif;
   margin: 5px 10px 15px 10px;
   div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
   }
`
const NotificationBoard = styled.div`
   background-color: gray;
   background-repeat: no-repeat;
   background-size: cover;
   width: 330px;
   border-radius: 18px;
   font-family: "Nunito", sans-serif;
   text-align: left;
   color: white;
   margin-left: 10px;
   margin-bottom: 6px;
   position: relative;
   h3 {
      position: absolute;
      top: 10px;
      left: 15px;
   }
   p {
      top: 33px;
      left: 15px;
      position: absolute;
      font-size: 20px;
   }
   img {
      width: 330px;
      border-radius: 18px;
      height: 160px;
   }
`
const NotificationText = styled.span`
   font-weight: 500;
   word-wrap: break-word;
   font-size: 1.1rem;
   color: #111111;
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
