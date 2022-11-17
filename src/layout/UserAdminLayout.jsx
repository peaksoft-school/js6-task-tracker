<<<<<<< HEAD
import React from "react"
import styled from "styled-components"
import Header from "../Components/Header"
import Workspaces from "../Components/Workspaces/Workspaces"

const UserAdminLayout = () => {
   return (
      <>
         <Header />
         <ContainerWorkspaces>
            <Workspaces />
         </ContainerWorkspaces>
=======
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import Header from "../Components/Header"
import { logout } from "../store/AuthSlice"
import TaskCard from "../Components/UI/TaskCard/TaskCard"
import Modal from "../Components/UI/Modal"
import InnerTaskCard from "../Components/InnerTaskCard/InnerTaskCard"

<<<<<<<< HEAD:src/layout/UserLayout.jsx
const UserLayout = () => {
   const [showModalInnerTaskCard, setShowModalInnerTaskCard] = useState(false)

   const openModalHandler = () => {
      setShowModalInnerTaskCard(!showModalInnerTaskCard)
   }

========
const UserAdminLayout = () => {
>>>>>>>> d5ef54a53bef6d7174dc5aebf05a9f6d7c619b05:src/layout/UserAdminLayout.jsx
   const dispatch = useDispatch()
   const logoutHandler = () => {
      dispatch(logout())
   }
   return (
      <>
         <Header />
<<<<<<<< HEAD:src/layout/UserLayout.jsx
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
========
         <button type="submit" onClick={logoutHandler}>
            LOGOUT
         </button>
>>>>>>>> d5ef54a53bef6d7174dc5aebf05a9f6d7c619b05:src/layout/UserAdminLayout.jsx
>>>>>>> d5ef54a53bef6d7174dc5aebf05a9f6d7c619b05
      </>
   )
}

<<<<<<< HEAD
export default UserAdminLayout

const ContainerWorkspaces = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 20px;
`
=======
<<<<<<<< HEAD:src/layout/UserLayout.jsx
export default UserLayout

const MainContainer = styled.main`
   display: flex;
   align-items: flex-start;
`
========
export default UserAdminLayout
>>>>>>>> d5ef54a53bef6d7174dc5aebf05a9f6d7c619b05:src/layout/UserAdminLayout.jsx
>>>>>>> d5ef54a53bef6d7174dc5aebf05a9f6d7c619b05
