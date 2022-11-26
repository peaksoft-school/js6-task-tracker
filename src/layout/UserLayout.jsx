import React from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import Header from "../Components/Header"
import SideBar from "./SideBar/SideBar"
import { logout } from "../store/AuthSlice"
import TaskCard from "../Components/UI/TaskCard/TaskCard"
import Modal from "../Components/UI/Modal"
import InnerTaskCard from "../Components/InnerTaskCard/InnerTaskCard"
import CloseButton from "../Components/UI/CloseButton"
import closeSvg from "../assets/icons/close.svg"
import useOpenClose from "../hooks/useOpenClose"

const UserLayout = () => {
   const { toggle, isShowing } = useOpenClose()
   const dispatch = useDispatch()
   const logoutHandler = () => {
      dispatch(logout())
   }
   return (
      <>
         <Header />
         <MainContainer>
            <SideBar />
            <TaskCard showInnerTaskCard={toggle} />
            <Modal fullWidth="75rem" onClose={toggle} isOpen={isShowing}>
               <InnerTaskCard />
               <CloseButton src={closeSvg} onClick={toggle} />
            </Modal>
         </MainContainer>
         <div>
            <button type="submit" onClick={logoutHandler}>
               LOGOUT
            </button>
         </div>
      </>
   )
}

export default UserLayout

const MainContainer = styled.main`
   display: flex;
   align-items: flex-start;
`
