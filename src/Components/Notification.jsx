import React, { useState } from "react"
import styled from "styled-components"
import { ClickAwayListener } from "@mui/material"
import NotificationItem from "./UI/NotificationItem"
import Notifications from "../assets/svg/NotificationIcon.svg"

function Notification({ props }) {
   const [modalActive, setModalActive] = useState(false)
   const showNotification = () => {
      setModalActive(!modalActive)
   }
   return (
      <>
         <ClickAwayListener onClickAway={() => setModalActive(false)}>
            <NotificationIconContainer>
               <img src={Notifications} alt="" />
               {props.length !== 0 && (
                  <span onClick={showNotification}>{props.length}</span>
               )}
            </NotificationIconContainer>
         </ClickAwayListener>
         <div>
            {modalActive && (
               <>
                  <NotificationItem />
                  <NotificationItem />
               </>
            )}
         </div>
      </>
   )
}

export default Notification
const NotificationIconContainer = styled.div`
   position: absolute;
   width: 37px;
   height: 27px;
   left: 1410px;
   top: 30px;
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
