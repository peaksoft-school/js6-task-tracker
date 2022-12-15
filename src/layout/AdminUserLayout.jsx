import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Route, Routes, useNavigate, useLocation } from "react-router-dom"
import AllBoards from "../Components/Board/AllBoards"
import Workspaces from "../Components/Workspaces/Workspaces"
import Boards from "../Components/Board/Boards"
import InnerBoard from "../Components/Board/InnerBoard"
import { getAllWorkspaces } from "../store/workspacesSlice"
import { clearBoards } from "../store/boardSlice"
import Header from "../Components/Header"
import Participants from "../Components/Participants"

const AdminUserLayout = () => {
   const { role } = useSelector((state) => state.auth.userInfo)
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { pathname } = useLocation()

   useEffect(() => {
      if (pathname === "/admin/*" || pathname === "/user/*") {
         navigate("allWorkspaces")
      }
   }, [])

   useEffect(() => {
      dispatch(getAllWorkspaces())
   }, [])

   useEffect(() => {
      if (pathname === "/admin/allWorkspaces") dispatch(clearBoards())
   }, [pathname])

   return (
      <>
         <Header role={role} />
         <Routes>
            <Route path="allWorkspaces" element={<Workspaces role={role} />} />
            <Route
               path="workspaces/:workspaceId/*"
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
            <Route path="profile" element={<h1>Profile</h1>} />
         </Routes>
      </>
   )
}

export default AdminUserLayout
