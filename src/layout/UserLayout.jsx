import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import Header from "../Components/Header"
import SideBar from "./SideBar/SideBar"
import { logout } from "../store/AuthSlice"
import TaskCard from "../Components/UI/TaskCard/TaskCard"
import Modal from "../Components/UI/Modal"
import InnerTaskCard from "../Components/InnerTaskCard/InnerTaskCard"

const UserLayout = () => {
   const [showModalInnerTaskCard, setShowModalInnerTaskCard] = useState(false)

   const openModalHandler = () => {
      setShowModalInnerTaskCard(!showModalInnerTaskCard)
   }

   const dispatch = useDispatch()
   const logoutHandler = () => {
      dispatch(logout())
   }
   return (
      <>
         <Header />
         <MainContainer>
            <SideBar />
            <TaskCard showInnerTaskCard={openModalHandler} />
            <Modal
               fullWidth="75rem"
               onClose={openModalHandler}
               isOpen={showModalInnerTaskCard}
            >
               <InnerTaskCard />
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
