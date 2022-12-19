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

const AdminUserLayout = () => {
   const { role } = useSelector((state) => state.auth.userInfo)
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
         <Header profileData={profileData} role={role} />
         <Routes>
            <Route path="" element={<Workspaces role={role} />} />
            <Route
               path="/workspaces/:workspaceId/*"
               element={<AllBoards role={role} />}
            >
               <Route path="boards" element={<Boards role={role} />} />
               <Route path="boards/:boardId" element={<InnerBoard />} />
               <Route
                  path="allissues"
                  element={
                     <h1 style={{ margin: "150px 0 0 300px" }}>All Issues</h1>
                  }
               />
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
   min-height: 100vh;
`
