import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { Route, Routes, useLocation } from "react-router-dom"
import AllBoards from "../Components/Board/AllBoards"
import Workspaces from "../Components/Workspaces/Workspaces"
import Boards from "../Components/Board/Boards"
import InnerBoard from "../Components/Board/InnerBoard"
import { getAllWorkspaces } from "../store/workspacesSlice"
import Participants from "../Components/Participants"
import { clearBoards } from "../store/boardSlice"
import Header from "../Components/Header"
import ProfileCrud from "../Components/ProfileCrud"
import { axiosInstance } from "../api/axiosInstance"
import ViewAll from "../Components/ViewAllIssues/ViewAll"

const AdminUserLayout = () => {
   const { role } = useSelector((state) => state.auth.userInfo)
   const [notification, setNotification] = useState([])
   const [countParticipants, setCountParticipants] = useState(0)
   const getNotificationHandler = async () => {
      try {
         const { data } = await axiosInstance.get("/api/notifications")
         return setNotification(data)
      } catch (error) {
         return console.log(error)
      }
   }
   const [profileData, setProfileData] = useState({})
   const dispatch = useDispatch()
   const { pathname } = useLocation()

   const getProfileData = async () => {
      try {
         const { data } = await axiosInstance.get("/api/profile/me")
         return setProfileData(data)
      } catch (error) {
         return console.log(error.message)
      }
   }
   useEffect(() => {
      dispatch(getAllWorkspaces())
      getProfileData()
   }, [])

   useEffect(() => {
      if (pathname === "/allWorkspaces") dispatch(clearBoards())
   }, [pathname])

   return (
      <Container>
         <Header
            notification={notification}
            getNotificationHandler={getNotificationHandler}
            profileData={profileData}
            role={role}
            getProfileData={getProfileData}
         />
         <Routes>
            <Route path="" element={<Workspaces role={role} />} />
            <Route
               path="/workspaces/:workspaceId/*"
               element={
                  <AllBoards
                     countParticipants={countParticipants}
                     role={role}
                  />
               }
            >
               <Route path="boards" element={<Boards role={role} />} />
               <Route path="boards/:boardId" element={<InnerBoard />} />
               <Route path="allissues" element={<ViewAll />} />
               <Route path="participants" element={<Participants />} />
            </Route>
            <Route
               path="profile"
               element={
                  <ProfileCrud
                     getProfileData={getProfileData}
                     profileData={profileData}
                     setProfileData={setProfileData}
                  />
               }
            />
         </Routes>
      </Container>
   )
}

export default AdminUserLayout

const Container = styled.div`
   background-color: white;
   min-height: 100vh;
`
