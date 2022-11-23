import React from "react"
import styled from "styled-components"
import avatar from "../assets/svg/womenAvatar.svg"
import UserAvatar from "./UI/UserAvatar"
import arrowRight from "../assets/icons/arrowRight.svg"
import DateAdded from "./UI/DateAdded"

function Notification({ notification }) {
   return (
      <NotificationContainer>
         <TitleBlock>
            <h3>Notification</h3>
            <span>Mark as read</span>
         </TitleBlock>

         {notification.map((item) => {
            return (
               <>
                  <NotificationBoard key={item.id}>
                     <BlueIcon />
                     <img
                        src="https://wallpapercave.com/dwp1x/wp4810861.jpg"
                        alt="boardPhoto"
                     />
                     <h3>Titl of the board</h3>
                     <p>Name of the column</p>
                  </NotificationBoard>
                  <StyledNotificationItem>
                     <div>
                        <UserAvatar src={avatar} />
                        <StyledUserName>
                           <span> {item.firstName}</span>
                           <span> {item.lastName}</span>
                        </StyledUserName>
                     </div>

                     <NotificationText>{item.message}</NotificationText>
                     <DateAdded date={item.createdAt} />

                     <StyledArrowIcon
                        rotate="180deg"
                        src={arrowRight}
                        onClick={() => console.log("hello")}
                     />
                  </StyledNotificationItem>
               </>
            )
         })}
      </NotificationContainer>
   )
}

export default Notification

const NotificationContainer = styled.div`
   display: flex;
   overflow: scroll;
   flex-direction: column;
   width: 380px;
   height: 80vh;
   align-items: center;
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
      margin: 0 0 0 35px;
      color: gray;
   }
`
const StyledNotificationItem = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-evenly;
   height: 120px;
   width: 350px;
   border-bottom: 1px solid #e3e3e3;
   font-family: "Nunito", sans-serif;
   margin-left: 10px;
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
   width: 360px;
   height: 160px;
   border-radius: 18px;
   font-family: "Nunito", sans-serif;
   text-align: left;
   color: white;
   margin-left: 10px;
   margin-bottom: 6px;
   position: relative;
   h3 {
      position: absolute;
      top: 2px;
      left: 15px;
   }
   p {
      top: 25px;
      left: 15px;
      position: absolute;
      font-size: 20px;
   }
   img {
      width: 360px;
      border-radius: 18px;
      height: 160px;
   }
`
const NotificationText = styled.span`
   font-weight: 500;
   font-size: 1.1rem;
   color: #111111;
`
const StyledArrowIcon = styled.img`
   position: absolute;
   width: 25px;
   height: 25px;
   right: 5px;
   top: 50px;
   transform: ${(props) => `rotate(${props.rotate})`};
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
