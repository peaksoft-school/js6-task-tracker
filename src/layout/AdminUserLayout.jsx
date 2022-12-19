import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Route, Routes, useNavigate, useLocation } from "react-router-dom"
import AllBoards from "../Components/Board/AllBoards"
import Workspaces from "../Components/Workspaces/Workspaces"
import Layout from "./Layout"
import Boards from "../Components/Board/Boards"
import InnerBoard from "../Components/Board/InnerBoard"
import { getAllWorkspaces } from "../store/workspacesSlice"
import ViewAll from "../Components/ViewAllIssues/ViewAll"

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

   return (
      <Layout role={role}>
         <Routes>
            <Route path="allWorkspaces" element={<Workspaces role={role} />} />
            <Route
               path="workspaces/:workspaceId/*"
               element={<AllBoards role={role} />}
            >
               <Route path="boards" element={<Boards role={role} />} />
               <Route path="boards/:boardId" element={<InnerBoard />} />
               <Route path="allissues" element={<ViewAll />} />
               <Route
                  path="participants"
                  element={
                     <h1 style={{ margin: "150px 0 0 300px" }}>Participants</h1>
                  }
               />
            </Route>
            <Route path="profile" element={<h1>Profile</h1>} />
         </Routes>
      </Layout>
   )
}

export default AdminUserLayout
