import React from "react"
import styled from "styled-components"
import Notifications from "../assets/svg/NotificationIcon.svg"
import useOpenClose from "../hooks/useOpenClose"
import NotificationItem from "./UI/NotificationItem"
import DropDown from "./UI/ReusableDropDown"
import avatar from "../assets/svg/womenAvatar.svg"

function Notification({ quantityNotification }) {
   const { toggle, isShowing } = useOpenClose()

   return (
      <>
         <NotificationIconContainer onClick={toggle}>
            <img src={Notifications} alt="" />
            {quantityNotification && (
               <span onClick={toggle}>{quantityNotification}</span>
            )}
         </NotificationIconContainer>

         <DropDown
            showState={isShowing}
            width="390px"
            height="90vh"
            top="60px"
            right="80px"
         >
            <NotificationContainer>
               <TitleBlock>
                  <h3>Notification</h3>
                  <span>Mark as read</span>
               </TitleBlock>
               <NotificationItem userAvatar={avatar} />
            </NotificationContainer>
         </DropDown>
      </>
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
