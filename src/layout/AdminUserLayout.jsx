import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Route, Routes, useNavigate, useLocation } from "react-router-dom"
import AllBoards from "../Components/Board/AllBoards"
import Workspaces from "../Components/Workspaces/Workspaces"
import Layout from "./Layout"
import Boards from "../Components/Board/Boards"
import InnerBoard from "../Components/Board/InnerBoard"
import { getAllWorkspaces } from "../store/workspacesSlice"
import { axiosInstance } from "../api/axiosInstance"

const AdminUserLayout = () => {
   const [workspacesById, setWorkspacesById] = useState({})
   const { role } = useSelector((state) => state.auth.userInfo)
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { pathname } = useLocation()

   useEffect(() => {
      if (pathname === "/admin/*" || pathname === "/user/*") {
         navigate("allWorkspaces")
      }
   }, [])

   const getWorkspacesId = async (id) => {
      try {
         const { data } = await axiosInstance.get(`/api/workspace/${id}`)
         setWorkspacesById(data)
         return navigate(`workspaces/${data.id}/boards`)
      } catch (error) {
         return console.log(error)
      }
   }
   useEffect(() => {
      dispatch(getAllWorkspaces())
   }, [])

   return (
      <Layout workspacesById={workspacesById} role={role}>
         <Routes>
            <Route
               path="allWorkspaces"
               element={
                  <Workspaces getWorkspacesId={getWorkspacesId} role={role} />
               }
            />
            <Route
               path="workspaces/:workspaceId/*"
               element={
                  <AllBoards workspaceById={workspacesById} role={role} />
               }
            >
               <Route
                  path="boards"
                  element={
                     <Boards workspacesById={workspacesById} role={role} />
                  }
               />
               <Route path="boards/:boardId" element={<InnerBoard />} />
               <Route
                  path="allissues"
                  element={
                     <h1 style={{ margin: "150px 0 0 300px" }}>All Issues</h1>
                  }
               />
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
